import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7000/api/user/login', {
        email_user: email,
        password_user: password,
      });

      // Предположим, что сервер возвращает токен в ответе
      const token = response.data.token; // Проверьте структуру ответа и место, где хранится токен

      // Если токен получен, сохраняем его, например, в localStorage
      if (token) {
        localStorage.setItem('token', token);
        navigate('/user-panel/'); // Перенаправляем пользователя на страницу пользователя
      } else {
        setError('Неверные учетные данные');
      }
    } catch (err: any) {
      console.error('Ошибка аутентификации:', err.response.data);
      setError(err.response.data.message || 'Что-то пошло не так');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Вход</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Пароль:</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition duration-300"
          >
            Войти
          </button>
          </form>
      </div>
    </div>
  );
};

export default SignIn;
