import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-800">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white w-64 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between p-4">
          <div className="text-xl font-semibold">Админ панель</div>
        </div>
        {/* Sidebar links */}
        <div className="p-4">
         <Link to="/user-panel/news" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
        Редактирование новостей
      </Link>
      <Link to="/user-panel/price" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
      Редактирование цен
      </Link>
      <Link to="/user-panel/trainers" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
      Редактирование тренерского состава
      </Link>
        </div>
      </div>

      {/* Burger Menu */}
      <div className="bg-white">
      <button
          onClick={() => setIsOpen(!isOpen)}
          className="block text-gray-500 bg-white p-3 focus:outline-none sm:w-11"
        >
         <img src="/img/burger.svg" className='w-7 sm:w-13' alt="" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
