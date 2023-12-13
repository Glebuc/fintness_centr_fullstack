import React from 'react';
import './../../index.css';




const MainCover = () => {
return (
    <main
  className="relative bg-[url(https://kartinkin.net/uploads/posts/2021-07/1626345485_11-kartinkin-com-p-trenazhernii-zal-fon-krasivo-21.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
       Фитнес-центр "Саров"

        <strong className="block font-extrabold text-purple-700">
          Всегда рядом
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
        Высокое качество, лучшие тренажеры, высококвалифированный тренерский состав
      </p>

    </div>
  </div>
</main>
);
};

export default MainCover;

