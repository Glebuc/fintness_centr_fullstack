import React from 'react';
import './../../index.css';
import { title } from 'process';




interface CardPrice {
    type_abonement: string;
    duration_abonement: string;
    descript_abonement: string[];
    price_abonement: number;
  }
  



const CardPrice:React.FC<CardPrice> = ({ type_abonement, duration_abonement, descript_abonement, price_abonement }) => {
    return (
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-500 flex flex-col relative overflow-hidden  hover:border-purple-500">
            
            <div>
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">{type_abonement}</h2>
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                <span>{price_abonement}</span>
                <span className="text-lg ml-1 font-normal text-gray-400">{duration_abonement}</span>
                </h1>
            </div>
                    {descript_abonement.map((oneDescript, index) => (
              <p key={index} className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {oneDescript}
              </p>
            ))}
            </div>
        </div>
    )
};

export default CardPrice;