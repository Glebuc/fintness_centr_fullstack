import React from 'react';
import './../../index.css';
import NewsImg from '../img/news.jpg';



const Main = () => {
return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden" id="pricing">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-purple-600">Новости</h1>
      </div>
      <div className="bg-purple-500 h-0.5 w-3/4 mx-auto mb-4"></div>
      </div>
      <section id='news'>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="Gym"
                  src={NewsImg}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
      
            <div className="relative flex items-center bg-purple-600">
              <span
                className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-purple-600"
              ></span>
      
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-white">
                 Полезные советы для здоровья и занятием спорта
                </h2>
      
                <p className="mt-4 text-white ">
                В современном мире огромное количество людей, и с каждым днём их становится всё больше, предпочитают заниматься спортом не только ради красивой и стройной фигуры и накаченных мышц, но и для собственного здоровья. Быть здоровым – это значит вести полноценную и долгую жизнь. А спорт играет, в данном случае, очень значимую роль. И не важно профессионально человек выполняет физические упражнения или любительски. Здоровый образ жизни – это, в первую очередь спортивные занятия!
                </p>
      
                <a
                  href="/news.html"
                  className="mt-8 inline-block rounded border border-purple-800 bg-purple-800 px-12 py-3 text-sm font-medium text-white hover:bg-purple-900 hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                >
                  Перейти в раздел новостей
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  </section>

);
};

export default Main;

