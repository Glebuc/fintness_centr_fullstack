import { Link } from "react-scroll";
import React from 'react';
import './../../index.css'


const Navigation:React.FC = () => {
return (
    <div className="flex flex-1 items-center justify-end gap-8 sm:gap-1">
    <nav
      aria-label="Site Nav"
      className="flex gap-4 lg:text-xs font-bold lg:uppercase lg:tracking-wide text-white"
    >
      <Link
        to="services" spy={true} smooth={true} offset={50} duration={500}
        className="block h-16 border-b-4 border-transparent leading-[4rem] cursor-pointer hover:border-purple-700 hover:border-purple-700"
      >
        Услуги
        </Link>

      <Link to="news" spy={true} smooth={true} offset={50} duration={500}
        className="block h-16 border-b-4 border-transparent leading-[4rem] cursor-pointer hover:border-purple-700 hover:border-purple-700"
      >
        Новости
      </Link>

      <Link to="trainers" spy={true} smooth={true} offset={50} duration={500}
        className="block h-16 border-b-4 border-transparent leading-[4rem] cursor-pointer hover:border-purple-700 hover:border-purple-700"
      >
        Тренера
      </Link>

      <Link to="time" spy={true} smooth={true} offset={50} duration={500}
        className="block h-16 border-b-4 border-transparent leading-[4rem] cursor-pointer hover:border-purple-700 hover:border-purple-700"
      >
        Расписание
      </Link>
    </nav>

    <div className="flex items-center ">
      <div className="flex items-center divide-x divide-gray-100 justify-center  bg-purple-700">
        <span>
          <a
            href="/sign.html"
            className="block border-b-4 border-transparent p-6 text-white font-bold hover:border-purple-700"
          >
             Регистрация
          </a>
        </span>
      </div>
    </div>
  </div>
);
};

export default Navigation;

