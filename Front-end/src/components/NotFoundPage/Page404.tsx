import React from 'react';
import './../../index.css';
import NotFoundPageImg from '../img/notfound.jpg';



const TimeTable = () => {
return (
    <div class="flex flex-col h-screen bg-gray-800">
    <img
      src="https://bulldozer26.ru/images/All/Sloi/slider-10.jpeg"
      alt=""
      class="object-cover w-full h-64"
    />
  
    <div class="flex items-center justify-center flex-1">
      <div class="max-w-xl px-4 py-8 mx-auto text-center">
        <h1 class="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Ошибка 404
          </h1>
        <h1 class="text-l font-bold tracking-tight text-white sm:text-4xl">
          Мы не нашли данную страницу
        </h1>
  
        <p class="mt-4 text-white/50">
          Попробуйте снова, или вернитесь на главную страницу, чтобы начать заново.
        </p>
  
        <a
          href="#"
          class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Вернуться домой
        </a>
      </div>
    </div>
  </div>

)}
export default TimeTable;

