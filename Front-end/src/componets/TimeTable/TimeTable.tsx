import React from 'react';
import './../../index.css';




const TimeTable = () => {
return (
    <section className="bg-gray-800 text-white" id='time'>
    <div
      className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Расписание</h2>
      </div>
     
<div className="relative overflow-x-auto shadow-md sm:rounded-lg my-12" >
<table className="w-full text-sm text-left text-purple-900">
    <thead className="text-xs text-white uppercase bg-purple-600">
        <tr className="text-center">
            <th scope="col" className="px-6 py-3">
                Тренер/направление
            </th>
            <th scope="col" className="px-6 py-3">
                Понедельник
            </th>
            <th scope="col" className="px-6 py-3">
                Вторник
            </th>
            <th scope="col" className="px-6 py-3">
                Среда
            </th>
            <th scope="col" className="px-6 py-3">
                Четверг
            </th>
            <th scope="col" className="px-6 py-3">
              Пятница
          </th>
          <th scope="col" className="px-6 py-3">
            Суббота
        </th>
        <th scope="col" className="px-6 py-3">
          Воскресенье
        </th>
        </tr>
    </thead>
    <tbody>
        <tr className="bg-purple-400 border border-purple-800">
            <th scope="row" className="px-6 font-black py-4 border border-purple-800 text-white whitespace-nowrap">
                Имя тренера 1
            </th>
            <td className="px-6 py-6 border border-purple-800">
              Занятие/Время
            </td>
            <td className="px-6 py-6 border border-purple-800">
              Занятие/Время
            </td>
            <td className="px-6 py-6 border border-purple-800">
              Занятие/Время
            </td>
            <td className="px-6 py-6 border border-purple-800">
              Занятие/Время
          </td>
          <td className="px-6 py-6 border border-purple-800">
            Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
      </td>
      <td className="px-6 py-6 border border-purple-800">
        Занятие/Время
    </td>
        </tr>
        <tr className="bg-purple-400 border border-purple-800">
          <th scope="row" className="px-6 py-4 border border-purple-800 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
            Имя тренера 1
        </th>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
      </td>
      <td className="px-6 py-6 border border-purple-800">
        Занятие/Время
    </td>
    <td className="px-6 py-6 border border-purple-800">
      Занятие/Время
  </td>
  <td className="px-6 py-6 border border-purple-800">
    Занятие/Время
</td>
        </tr>
        <tr className="bg-purple-400 border border-purple-800">
          <th scope="row" className="px-6 py-4 border border-purple-800 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
            Имя тренера 1
        </th>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
      </td>
      <td className="px-6 py-6 border border-purple-800">
        Занятие/Время
    </td>
    <td className="px-6 py-6 border border-purple-800">
      Занятие/Время
  </td>
  <td className="px-6 py-6 border border-purple-800">
    Занятие/Время
</td>
        </tr>
        <tr className="bg-purple-400 border border-purple-800">
          <th scope="row" className="px-6 py-4 border border-purple-800 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
            Имя тренера 1
        </th>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
      </td>
      <td className="px-6 py-6 border border-purple-800">
        Занятие/Время
    </td>
    <td className="px-6 py-6 border border-purple-800">
      Занятие/Время
  </td>
  <td className="px-6 py-6 border border-purple-800">
    Занятие/Время
</td>
        </tr>
        <tr className="bg-purple-400 border border-purple-800">
          <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
            Имя тренера 1
        </th>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
        </td>
        <td className="px-6 py-6 border border-purple-800">
          Занятие/Время
      </td>
      <td className="px-6 py-6 border border-purple-800">
        Занятие/Время
    </td>
    <td className="px-6 py-6 border border-purple-800">
      Занятие/Время
  </td>
  <td className="px-6 py-6 border border-purple-800">
    Занятие/Время
</td>
        </tr>
    </tbody>
</table>
</div>

    </div>
</section>
);
};

export default TimeTable;

