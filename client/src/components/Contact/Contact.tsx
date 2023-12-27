import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6">Контакты фитнес-центра "Атом"</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Адрес:</h2>
        <p>Город, Улица, Дом</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Телефон:</h2>
        <p>Телефон: +7 123 456 789</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Email:</h2>
        <p>Email: info@fitness-atom.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
