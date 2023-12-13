import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainersCard from './TrainersCard';



interface TrainerData {
  id_trainer: number;
  fio_trainer: string;
  descript_trainer: string;
  birth_trainer: string;
  phone_trainer: string;
  photo_trainer: string;
  specialization_trainer: string;
}



const TrainersComponent: React.FC = () => {


  const [trainersData, setTrainersData] = useState([]);

  useEffect(() => {
    const fetchTrainersData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/trainer');
        setTrainersData(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchTrainersData();
  }, []);


return (
    <section>
        <div
          className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
          id='trainers'
        >
          
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Тренерский состав</h2>
          </div>
          <div className="mt-8 flex flex-wrap justify-between">
            {trainersData.map((trainer: TrainerData) => (
              <div key={trainer.id_trainer} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
                <TrainersCard
                  name={trainer.fio_trainer}
                  imagePath={'http://localhost:7000/'+trainer.photo_trainer}
                  altImage={trainer.fio_trainer}
                  descriptionTrainers={trainer.descript_trainer}
                  specialization_trainer={trainer.specialization_trainer}
                />
              </div>
            ))}           
          </div>
          </div>

          <div className="grid grid-cols-3 gap-x-5 mt-5">
            
        </div>
    </section>
);
};

export default TrainersComponent;

