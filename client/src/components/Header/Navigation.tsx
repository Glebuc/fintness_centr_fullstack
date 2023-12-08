import { NavLink } from 'react-router-dom'
import React from 'react';
import './../../index.css'


const Navigation:React.FC = () => {
return (
    <div className="flex flex-1 items-center justify-end gap-8 sm:gap-5">
    <nav
      aria-label="Site Nav"
      className="flex gap-9 lg:text-xs font-bold lg:uppercase lg:tracking-wide text-white"
    >

      <NavLink to="/news"
        className="block h-16 border-b-4 border-transparent leading-[4rem] cursor-pointer active:border-purple-700 hover:border-purple-700"
      >
        Новости
      </NavLink>

      <NavLink to="/trainers"
        className="block h-16 border-b-4 border-transparent leading-[4rem] cursor-pointer active:border-purple-700 hover:border-purple-700"
      >
        Тренера
      </NavLink>

      <NavLink to="/time" 
        className="block h-16 border-b-4 border-transparent leading-[4rem] cursor-pointer active:border-purple-700  hover:border-purple-700"
      >
        Расписание
      </NavLink>
    </nav>

    <div className="flex items-center gap-5">
      <div className="flex items-center divide-x divide-gray-100 justify-center  active:border-purple-700 bg-purple-700">
        <span>
          <NavLink
            to="/registration"
            className="block border-b-4 border-transparent p-2 cursor-pointer text-white font-bold active:bg-purple-600 hover:bg-purple-600"
          >
             Регистрация
          </NavLink>
        </span>
      </div>
      <div className="flex items-center divide-x divide-gray-100 justify-center  bg-purple-700">
        <span>
          <NavLink
            to="/login"
            className="block border-b-4 border-transparent p-2 cursor-pointer text-white font-bold active:bg-purple-600 hover:bg-purple-600"
          >
             Войти
          </NavLink>
        </span>
      </div>
    </div>
  </div>
);
};

export default Navigation;

