import React from 'react';
import './../../index.css';
import Trainer1 from '../img/trainer1.jpg';
import Trainer2 from '../img/trainer2.avif';
import Trainer3 from '../img/trainer3.avif'
import Trainer4 from '../img/trainer4.jpg';
import Trainer5 from '../img/trainer5.jpg';
import Trainer6 from '../img/trainer6.jpg';




const Trainers = () => {
return (
    <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
          id='trainers'
        >
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Тренерский состав</h2>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="w-full">
              <a href="#" class="group relative block bg-black">
              <img
                alt="Trainer"
                src={Trainer1}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
              />
            
              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-bold uppercase tracking-widest text-purple-900 bg-purple-300">
                  Тренер по кроссфиту
                </p>
            
                <p class="text-xl font-bold text-white sm:text-2xl">Светлана Васильева</p>
            
                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    Тренер Свтелана, всегда находится в центре внимания своих подопечных. Она постоянно следит за выполнением упражнений, корректирует технику и дает ценные советы по тренировкам.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            </div>
            <div>
              <a href="#" class="group relative block bg-black">
              <img
                alt="Trainer"
                src={Trainer2}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
              />
            
              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-bold uppercase tracking-widest text-purple-900 bg-purple-300">
                  Тренер направления "MMA"
                </p>
            
                <p class="text-xl font-bold text-white sm:text-2xl">Олег Мурзин</p>
            
                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    Тренер Олег, создает дружественную атмосферу на занятиях фитнесом. Он проводит тренировки с юмором, но при этом всегда следит за правильной техникой выполнения упражнений.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            </div>
            <div>
              <a href="#" class="group relative block bg-black">
              <img
                alt="Trainer"
                src={Trainer3}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
              />
            
              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-bold uppercase tracking-widest text-purple-900 bg-purple-300">
                  Тренер направления "Йога"
                </p>
            
                <p class="text-xl font-bold text-white sm:text-2xl">Алена Поздова</p>
            
                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    Тренер Алена– настоящий профессионал в области йоги. Она не только поможет вам научиться правильно выполнять асаны, но и расскажет о глубоком философском смысле йоги и ее влиянии на нашу жизнь.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            </div>

            <div>
              <a href="#" class="group relative block bg-black">
              <img
                alt="Trainer"
                src={Trainer4}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
              />
            
              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-bold uppercase tracking-widest text-purple-900 bg-purple-300">
                  Индивидуальный тренер
                </p>
            
                <p class="text-xl font-bold text-white sm:text-2xl">Петр Логунов</p>
            
                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    Тренер Петр– эксперт в области фитнеса и здорового образа жизни. Он поможет вам не только найти правильный подход к тренировкам, но и даст ценные советы по здоровому питанию.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            </div>
            <div>
              <a href="#" class="group relative block bg-black">
              <img
                alt="Trainer"
                src={Trainer5}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
              />
            
              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-bold uppercase tracking-widest text-purple-900 bg-purple-300">
                  Тренер направления "ОФЗ"
                </p>
            
                <p class="text-xl font-bold text-white sm:text-2xl">Олег Глебов</p>
            
                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    Тренер Олег. Настоящий профессионал своего дела. Он подберет для вас индивидуальную программу тренировок, настроенную на достижение максимальных результатов.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            </div>
            <div>
              <a href="#" class="group relative block bg-black">
              <img
                alt="Trainer"
                src={Trainer6}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
              />
            
              <div class="relative p-4 sm:p-6 lg:p-8">
                <p class="text-sm font-bold uppercase tracking-widest text-purple-900 bg-purple-300">
                  Тренер групповых тренировок
                </p>
            
                <p class="text-xl font-bold text-white sm:text-2xl">Максим Жуков</p>
            
                <div class="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p class="text-sm text-white">
                    Тренер Максим, готов всегда вдохновлять своих учеников на достижение новых вершин в спорте. Он не только корректирует технику тренировок, но и непрерывно мотивирует к работе над собой.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            </div>
          </div>
          </div>

          <div class="grid grid-cols-3 gap-x-5 mt-5">
            
        </div>
    </section>
);
};

export default Trainers;

