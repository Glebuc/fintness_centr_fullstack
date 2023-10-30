import React from 'react';
import './../../index.css';


const Footer: React.FC = () => {return (
<footer aria-label="Site Footer" className="bg-gray-800">
    <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <strong
          className="block text-center text-xl font-bold text-white sm:text-3xl"
        >
         Хочешь узнавать больше новостей о нас? Тогда подпишись!
        </strong>
  
        <form className="mt-6">
          <div className="relative max-w-lg">
            <label className="sr-only"> Email </label>
  
            <input
              className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
              id="email"
              type="email"
              placeholder="deryugin_gleb@mail.ru"
            />
  
            <button
              className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-purple-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-purple-800"
            >
              Подписаться
            </button>
          </div>
        </form>
      </div>
  
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
        <div className="mx-auto max-w-sm lg:max-w-none">
          <p className="mt-4 text-center text-white lg:text-left lg:text-lg">
            В здоровм теле - здоровый дух                                      
          </p>


        </div>
  
        <div
          className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
        >
          
  
          <div>
            <strong className="font-medium text-white"> О важном </strong>
  
            <nav
              aria-label="Footer About Nav"
              className="mt-6 flex flex-col space-y-1"
            >
              <a className="text-white transition hover:text-white/60" href="/">
                О нас
              </a>
              <a className="text-white transition hover:text-white/60" href="/">
                Услуги
              </a>
              <a className="text-white transition hover:text-white/60" href="/">
                Галлерея
              </a>
              <a className="text-white transition hover:text-white/60" href="/">
                Тренера
              </a>
            </nav>
          </div>
  
          <div>
            <strong className="font-medium text-white"> Поддержка </strong>
  
            <nav
              aria-label="Footer Support Nav"
              className="mt-6 flex flex-col space-y-1"
            >
              <a className="text-white transition hover:text-white/60" href="/">
                Контакты
              </a>
  
              <a className="text-white transition hover:text-white/60" href="/">
                Правила
              </a>
  
              <a className="text-white transition hover:text-white/60" href="/">
                Расписание
              </a>
            </nav>
          </div>
        </div>
      </div>
  
      <div className="mt-16 border-t border-gray-100 pt-8">
        <p className="text-center text-xs leading-relaxed text-white">
          © СарФТИ НИЯУ МИФИ 2023.Все права на сайт защищены.
  
          <br />
  
          Сайт разработан
          <a
            href="#"
            className="text-white transition hover:text-purple-300/75"
            ><br /> (-___-)</a>
        </p>
        <p className="text-center text-white underline transition hover:text-purple-300/75">
            <a href="#" className="">Перейти в админ. панель</a>
        </p>     
      </div>
    </div>
  </footer>

  );
};

export default Footer;
