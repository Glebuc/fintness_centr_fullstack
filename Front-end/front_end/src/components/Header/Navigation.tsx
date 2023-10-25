import { Link } from "react-scroll";
import { StickyContainer, Sticky } from 'react-sticky';
import React from 'react';
import './../../index.css'


const Navigation:React.FC = () => {
return (
    <div className="flex flex-1 items-center justify-end gap-8">
    <nav
      aria-label="Site Nav"
      className="flex gap-4 lg:text-xs font-bold lg:uppercase lg:tracking-wide text-white"
    >
      <Link
        to="services" spy={true} smooth={true} offset={50} duration={500}
        className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-purple-700 hover:border-purple-700"
      >
        Услуги
        </Link>

      <Link to="news" spy={true} smooth={true} offset={50} duration={500}
        className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-purple-700 hover:border-purple-700"
      >
        Новости
      </Link>

      <Link to="trainers" spy={true} smooth={true} offset={50} duration={500}
        className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-purple-700 hover:border-purple-700"
      >
        Тренера
      </Link>

      <Link to="time" spy={true} smooth={true} offset={50} duration={500}
        className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-purple-700 hover:border-purple-700"
      >
        Расписание
      </Link>
    </nav>

    <div className="flex items-center ">
      <div className="flex items-center divide-x divide-gray-100 justify-center  bg-purple-700">
        <span>
          <a
            href="/sign.html"
            className="block border-b-4 border-transparent p-6 hover:border-purple-700"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

            <span className="sr-only"> Личный кабинет </span>
          </a>
        </span>
      </div>
    </div>
  </div>
);
};

export default Navigation;

