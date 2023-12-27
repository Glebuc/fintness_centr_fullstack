import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Trainer {
  id_trainer: string;
  fio_trainer: string;
}

const TrainerList = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [newTrainerData, setNewTrainerData] = useState({
    fio_trainer: '',
    descript_trainer: '',
    birth_trainer: '',
    phone_trainer: '',
    photo_trainer: null as File | null, // Используем тип File для фото
    specialization_trainer: '',
  });

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get<Trainer[]>('http://localhost:7000/api/trainer');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchTrainers();
  }, []);

  const handleDelete = async (trainerId: string) => {
    try {
      await axios.delete(`http://localhost:7000/api/trainer/${trainerId}`);
      const updatedTrainers = trainers.filter((trainer) => trainer.id_trainer !== trainerId);
      setTrainers(updatedTrainers);
    } catch (error) {
      console.error('Error deleting trainer:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTrainerData({ ...newTrainerData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setNewTrainerData({ ...newTrainerData, photo_trainer: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData();
    Object.entries(newTrainerData).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });
  
    try {
      await axios.post('http://localhost:7000/api/trainer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const response = await axios.get<Trainer[]>('http://localhost:7000/api/trainer');
      setTrainers(response.data);
      setNewTrainerData({
        fio_trainer: '',
        descript_trainer: '',
        birth_trainer: '',
        phone_trainer: '',
        photo_trainer: null,
        specialization_trainer: '',
      });
    } catch (error) {
      console.error('Error adding trainer:', error);
    }
  };
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-2'>Список тренеров</h2>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id_trainer} className='flex p-3 border-b border-purple-800 justify-between'>
            {trainer.fio_trainer}{' '}
            <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => handleDelete(trainer.id_trainer)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>

      <div className='mt-6'>
        <h2 className='text-2xl font-semibold mb-2'>Добавить тренера</h2>
        <form onSubmit={handleSubmit} className='mt-4'>
          <div className='mb-4'>
            <input type='text' className='border rounded px-2 py-1' name='fio_trainer' value={newTrainerData.fio_trainer} onChange={handleInputChange} placeholder='ФИО тренера' />
          </div>
          <div className='mb-4'>
            <input type='text' className='border rounded px-2 py-1' name='descript_trainer' value={newTrainerData.descript_trainer} onChange={handleInputChange} placeholder='Описание тренера' />
          </div>
          <div className='mb-4'>
          <input
              type='date'
              className='border rounded px-2 py-1'
              name='birth_trainer'
              value={newTrainerData.birth_trainer}
              onChange={handleInputChange}
              placeholder='ГГГГ-ММ-ДД'
              pattern="\d{4}-\d{2}-\d{2}"
            />
          </div>
          <div className='mb-4'>
          <input
              type='text'
              className='border rounded px-2 py-1'
              name='phone_trainer'
              value={newTrainerData.phone_trainer}
              onChange={handleInputChange}
              placeholder='Номер телефона'
              pattern='^\+?[0-9]{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$'
            />
          </div>
          <div className='mb-4'>
            <input type='file' accept='image/*' name='photo_trainer' onChange={handleFileChange} />
          </div>
          <div className='mb-4'>
            <input type='text' className='border rounded px-2 py-1' name='specialization_trainer' value={newTrainerData.specialization_trainer} onChange={handleInputChange} placeholder='Специализация' />
          </div>
          <div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Добавить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainerList;
