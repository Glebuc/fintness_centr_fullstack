import { Link } from "react-router-dom";
import React from 'react';
import './../../index.css'

interface MyComponentProps {
  id: string;
}



const DescriptCard: React.FC<MyComponentProps> = ({ id }) => {return (
    <section className="bg-gray-800 text-white">
    <div
      className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8" id="services"
    >
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Услуги</h2>
  
        <p className="mt-4 text-gray-300">
          К Вашим услугам: тренажёрный зал, групповые занятия, занятия единоборствами, персональные тренировки, детская комната, сауна!
        </p>
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
          href="#"
        >
          <img src="./../img/gym-svgrepo-com.svg" alt="" />
          <h2 className="mt-4 text-xl font-bold text-white">ТРЕНАЖЕРНЫЙ ЗАЛ</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Здесь вы найдёте рычажные, блочные, и кардио-тренажёры, а также свободные веса и оборудование для функционального тренинга. Наши тренеры всегда подскажут, как лучше и быстрее добиться результатов.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
          href="#"
        >
        <img src="./../img/gym-svgrepo-com.svg" alt="" />
  
          <h2 className="mt-4 text-xl font-bold text-white">ГРУППОВОЙ ФИТНЕС</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            На групповых тренировках вы сможете разучить сложные силовые связки или погрузиться в мир йоги, сесть на шпагат или просто быть в тонусе и хорошем настроении. Всё это под контролем опытных фитнес-инструкторов.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
          href="#"
        >
       <img src="./../img/gym-svgrepo-com.svg" alt="" />
  
          <h2 className="mt-4 text-xl font-bold text-white">ЕДИНОБОРСТВА</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            ММА включает в себя самые популярные виды контактных единоборств: бокс, кикбоксинг, борьба, дзюдо, самбо, бразильское джиу-джитсу. А в октагоне вы почувствуете себя настоящим Макгрегором!
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
          href="#"
        >
        <img src="./../img/gym-svgrepo-com.svg" alt="" />
  
          <h2 className="mt-4 text-xl font-bold text-white">ДЕТСКИЕ ТРЕНИРОВКИ</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Ходите на тренировки вместе с детьми. Им не придется ждать вас в холле: в нашем клубе дети с большим интересом увлекаются детским фитнесом, единоборствами или конструктором в лего-пространстве.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
          href="#"
        >
        <img src="./../img/gym-svgrepo-com.svg" alt="" />
          <h2 className="mt-4 text-xl font-bold text-white">ФИТНЕС-БАР</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Здесь вы можете купить воду, если забыли свою, съесть протеиновый батончик после тренировки, позагорать в солярии и просто отдохнуть со стаканом протеинового коктейля или вкусного кофе из автомата.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
          href="#"
        >
        <img src="./../img/gym-svgrepo-com.svg" alt="" />
  
          <h2 className="mt-4 text-xl font-bold text-white">САЛОН КРАСОТЫ</h2>
  
          <p className="mt-1 text-sm text-gray-300">
            Профессиональный массаж и все бьюти-услуги в одном месте: маникюр, педикюр, дизайн бровей, шугаринг + селективная парфюмерия на розлив и под заказ.
          </p>
        </a>
      </div>
    </div>
  </section>

  );
};

export default DescriptCard;
