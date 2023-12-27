import React, { useState } from 'react';
import axios from 'axios';

const AddPriceForm = () => {
  const [priceData, setPriceData] = useState({
    type_abonement: '',
    duration_abonement: '',
    descript_abonement: [''],
    price_abonement: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setPriceData({ ...priceData, [name]: value });
  };

  const handleAddDescription = () => {
    setPriceData({ ...priceData, descript_abonement: [...priceData.descript_abonement, ''] });
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const updatedDescriptions = [...priceData.descript_abonement];
    updatedDescriptions[index] = value;
    setPriceData({ ...priceData, descript_abonement: updatedDescriptions });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:7000/api/price', priceData);
      console.log('Цена успешно добавлена');
      setPriceData({
        type_abonement: '',
        duration_abonement: '',
        descript_abonement: [''],
        price_abonement: 0,
      });
    } catch (error) {
      console.error('Ошибка при добавлении цены:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-7">
        <label htmlFor="type_abonement" className="block font-semibold mb-1">
          Тип абонемента
        </label>
        <input
          type="text"
          name="type_abonement"
          value={priceData.type_abonement}
          onChange={handleInputChange}
          className="border rounded px-2 py-1 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="duration_abonement" className="block font-semibold mb-1">
          Продолжительность
        </label>
        <input
          type="text"
          name="duration_abonement"
          value={priceData.duration_abonement}
          onChange={handleInputChange}
          className="border rounded px-2 py-1 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="descript_abonement" className="block font-semibold mb-1">
          Описание
        </label>
        {priceData.descript_abonement.map((description, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              value={description}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddDescription} className="bg-blue-500 text-white px-4 py-2 rounded">
          Добавить описание
        </button>
      </div>
      <div className="mb-4">
        <label htmlFor="price_abonement" className="block font-semibold mb-1">
          Цена
        </label>
        <input
          type="number"
          name="price_abonement"
          value={priceData.price_abonement}
          onChange={handleInputChange}
          className="border rounded px-2 py-1 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Добавить
      </button>
    </form>
  );
};

export default AddPriceForm;
