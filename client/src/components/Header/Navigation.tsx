import { Link } from "react-scroll";
import React from 'react';
import './../../index.css'


const Navigation:React.FC = () => {
return (
    <div className="flex flex-1 items-center justify-end gap-8 sm:gap-5">
    <nav
      aria-label="Site Nav"
      className="flex gap-9 lg:text-xs font-bold lg:uppercase lg:tracking-wide text-white"
    >

      <a href="/news"
        className="block h-16 border-b-4 border-transparent leading-[4rem] cursor-pointer hover:border-purple-700 hover:border-purple-700"
      >
        Новости
      </a>

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
            href="/registration"
            className="block border-b-4 border-transparent p-2 text-white font-bold hover:bg-purple-600"
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

