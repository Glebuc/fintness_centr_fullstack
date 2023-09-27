import React from 'react';
import './../../index.css';




const Price = () => {
return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden" id="pricing">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-purple-600">Цены</h1>
        <div className="flex mx-auto border-2 border-purple-500 rounded overflow-hidden mt-6">
          <button className="py-1 px-4 bg-purple-500 text-white focus:outline-none">На месяц</button>
          <button className="py-1 px-4 text-gray-300 focus:outline-none">На год</button>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden hover:border-purple-500">
            <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">Пробный</h2>
            <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">Бесплатно</h1>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Получите первое занятие бесплатно
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Доступ ко всему оборудованию
            </p>
          </div>
        </div>
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-500 flex flex-col relative overflow-hidden  hover:border-purple-500">
            <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">Базовый</h2>
            <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
              <span>2000 Р</span>
              <span className="text-lg ml-1 font-normal text-gray-400">/месяц</span>
            </h1>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Ограничение по времени 4 часа
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Доступ к части групповых занятий
            </p>
          </div>
        </div>
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden hover:border-purple-500">
            <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">ПРО</h2>
            <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
              <span>3000</span>
              <span className="text-lg ml-1 font-normal text-gray-400">/месяц</span>
            </h1>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Нет ограничения по времени
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Доступ ко всем групповым занятиям
            </p>
          </div>
        </div>
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden hover:border-purple-500">
            <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">Эксклюзив</h2>
            <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
              <span>5000</span>
              <span className="text-lg ml-1 font-normal text-gray-400">/месяц</span>
            </h1>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                  </svg>
              </span>
              Нет ограничения по времени
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Составление персонального рациона от специалиста
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Доступ ко всем групповым занятиям
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Составление персональной программы тренировок
            </p>
            <p className="flex items-center text-gray-400 mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Доступ в сауну
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Price;

