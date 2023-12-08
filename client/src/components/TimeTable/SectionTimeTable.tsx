import React from 'react';
import './../../index.css';
import TimeTable  from "./TimeTable";




const SectionTimeTable:React.FC = () => {
return (
    <section className="bg-gray-800 text-white" id='time'>
    <div
      className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Расписание</h2>
      </div>
     
<div className="relative overflow-x-auto shadow-md sm:rounded-lg my-12" >
    <TimeTable/>
</div>

    </div>
</section>
);
};

export default SectionTimeTable;

