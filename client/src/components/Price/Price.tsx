import React, { useState, useEffect } from 'react';
import CardPrice from './CardPrice';
import axios from 'axios';

const PriceList: React.FC = () => {

  const [abonements, setAbonements] = useState<CardPrice[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CardPrice[]>('http://localhost:7000/api/price');
        setAbonements(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);


return (
  
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden" id="pricing">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-purple-600">Цены</h1>
      </div>
      <div className="flex justify-center flex-wrap -m-4">
        
          {abonements.map((abonement, index) => (
            <CardPrice
              key={index}
              type_abonement={abonement.type_abonement}
              duration_abonement={abonement.duration_abonement}
              descript_abonement={abonement.descript_abonement}
              price_abonement={abonement.price_abonement}
            />
          ))}
        
        
            
       
      </div>
    </div>
  </section>
);
};

export default PriceList;

