import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddPriceForm from './AddPrice'

interface Price {
  id_type_abonement: number;
  type_abonement: string;
  duration_abonement: string;
  descript_abonement: string[];
  price_abonement: number;
}

const PriceList = () => {
  const [prices, setPrices] = useState<Price[] | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get<Price[]>('http://localhost:7000/api/price');
        setPrices(response.data);
      } catch (error) {
        console.error('Error fetching prices:', error);
        setPrices([]);
      }
    };

    fetchPrices();
  }, []);

  const handleDelete = async (priceId: number) => {
    try {
      await axios.delete(`http://localhost:7000/api/price/${priceId}`);
      const updatedPrices = (prices || []).filter((price) => price.id_type_abonement !== priceId);
      setPrices(updatedPrices);
    } catch (error) {
      console.error('Error deleting price:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <h1 className="text-2xl font-bold mb-4">Добавление цен</h1>
      <AddPriceForm/> 
      <h1 className="text-2xl font-bold mt-8">Список цен</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(prices || []).map((price) => (
          <div key={price.id_type_abonement} className="bg-white rounded-lg shadow-md p-4 relative">
            <div>
              <p className="font-semibold">Тип абонемента: {price.type_abonement}</p>
              <p>Продолжительность: {price.duration_abonement}</p>
              <p>Описание:</p>
              <ul className="list-disc ml-6">
                {(price.descript_abonement || []).map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
              <p>Цена: {price.price_abonement}</p>
            </div>
            <button
              onClick={() => handleDelete(price.id_type_abonement)}
              className="absolute bottom-0 right-0 bg-red-500 text-white px-2 py-2  rounded w-full"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
