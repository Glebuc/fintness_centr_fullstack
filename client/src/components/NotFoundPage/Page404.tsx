import React from 'react';
import './../../index.css';



const Page404 = () => {
return (
    <div className="flex flex-col h-screen bg-gray-800">
    <img
      src="https://bulldozer26.ru/images/All/Sloi/slider-10.jpeg"
      alt=""
      className="object-cover w-full h-64"
    />
  
    <div className="flex items-center justify-center flex-1">
      <div className="max-w-xl px-4 py-8 mx-auto text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Ошибка 404
          </h1>
        <h1 className="text-l font-bold tracking-tight text-white sm:text-4xl">
          Мы не нашли данную страницу
        </h1>
  
        <p className="mt-4 text-white/50">
          Попробуйте снова, или вернитесь на главную страницу, чтобы начать заново.
        </p>
  
        <a
          href="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  </div>

)}
export default Page404;

