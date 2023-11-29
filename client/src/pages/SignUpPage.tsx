import React from 'react'
import Header from '../components/Header/Header';


const SignUp = () => {
  return (
    <div className="bg-purple-600">
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-3 lg:py-16 lg:px-8 lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
        className="relative block h-12 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 hidden lg:block"
      >
        <img
          alt="Pattern"
          src="/img/gallery2.webp"
          className="absolute inset-0 h-full w-full object-cover border"
        />
      </aside>
  
      <main
        aria-label="Main"
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl"> 
          <h1
            className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
           Регистрация
          </h1>
  
          <p className="mt-4 leading-relaxed text-white dark:text-gray-400">
           Окунись в мир спорта.
          </p>
  
          <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                ФИО
              </label>
  
              <input
                type="text"
                id="FirstName"
                name="first_name"
                className=" p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                E-mail
              </label>
  
              <input
                type="text"
                id="LastName"
                name="last_name"
                className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                Номер телефона
              </label>
  
              <input
                type="email"
                id="Email"
                name="email"
                className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                Возраст
              </label>
  
              <input
                type="email"
                id="Email"
                name="email"
                className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                Пол
              </label>
  
              <select className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <option>Мужчина</option>
                <option>Женщина</option>
              </select>
            </div>
  
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                Пароль
              </label>
  
              <input
                type="password"
                id="Password"
                name="password"
                className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="PasswordConfirmation"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                Подтвердите пароль
              </label>
  
              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
            <div className="col-span-6">
              <label htmlFor="MarketingAccept" className="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                />
  
                <span className="text-sm text-white dark:text-gray-200">
                  Я согласен с политикой конфиденциальности.
                </span>
              </label>
            </div>
  
            <div className="col-span-6">
              <p className="text-sm text-gray-300 dark:text-gray-400">
                Создавая аккаунт Вы соглашайтесь с
                <a href="#" className="text-white underline dark:text-gray-200">
                  политикой конфиденциальности
                </a>
              </p>
            </div>
  
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                className="inline-block shrink-0 rounded-md border border-white bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-purple-600 bg-white focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-black"
              >
                Зарегистрироваться
              </button>
  
              <p className="mt-4 text-sm text-gray-300 dark:text-gray-400 sm:mt-0">
                Уже есть аккаунт?
                <a href="/login" className="text-white underline dark:text-gray-200"
                  >Войти</a>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
  </div>
)}

export default SignUp;
