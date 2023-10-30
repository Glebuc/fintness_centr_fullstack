import React, { useState } from 'react';
import './../../index.css';
import { title } from 'process';
import CardPrice from './CardPrice'



type Card = {
  title: string;
  price: number;
  period: string;
};

type PriceList = Card[];

const monthPriceList: PriceList = [
  { title: 'Базовый', price: 2000, period: "/месяц" },
  { title: 'ПРО', price: 3000, period: "/месяц" },
  { title: 'Эксклюзив', price: 5000, period: "/месяц" },
];

const yearPriceList: PriceList = [
  { title: 'Базовый', price: 16000, period: "/год" },
  { title: 'ПРО', price: 24000, period: "/год" },
  { title: 'Эксклюзив', price: 38000, period: "/год" },
];

const Price:React.FC = () => {
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
        
          <CardPrice />
       
          <CardPrice />
        
          <CardPrice />
        
          <CardPrice />
        
        
       
      </div>
    </div>
  </section>
);
};

export default Price;

