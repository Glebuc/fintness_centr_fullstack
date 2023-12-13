import React from 'react';
import './../../index.css';


interface TrainersCard {
  name: string;
  imagePath: string;
  altImage: string;
  descriptionTrainers: string;
  specialization_trainer: string;
}


const TrainersCard :React.FC<TrainersCard> = ({ name, imagePath, altImage, descriptionTrainers, specialization_trainer }) => {
return (
  <a href="#" className="group relative block bg-black">
  <img
    alt={altImage}
    src={imagePath}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-bold uppercase tracking-widest text-purple-900 bg-purple-300">
      {specialization_trainer}
    </p>

    <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        {descriptionTrainers}
        </p>
      </div>
    </div>
  </div>
</a>
);
};

export default TrainersCard;

