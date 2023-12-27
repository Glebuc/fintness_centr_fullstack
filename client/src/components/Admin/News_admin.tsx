import React, { useState, useEffect } from 'react';

interface NewsItem {
  id_news: number;
  title_news: string;
  descript_news: string;
  img: string;
  createdAt: string;
  updatedAt: string;
  userIdUser: null | number;
}

const NewsComponent: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<NewsItem | null>(null);
  const [editedDescription, setEditedDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:7000/api/news?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        const { rows, count } = data;
        const newsItems: NewsItem[] = rows;
        setNews(newsItems);
        setTotalPages(Math.ceil(count / 10)); // Assuming 10 news items per page
      })
      .catch((error) => console.error('Error fetching news:', error));
  }, [currentPage]);

  const handleDelete = (id_news: number) => {
    fetch(`http://localhost:7000/api/news/${id_news}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if (response.ok) {
        console.log(`News with ID ${id_news} has been deleted.`);
        window.location.reload();
      } else {
        console.error('Failed to delete news:', response.statusText);
      }
    })
    .catch((error) => {
      console.error('Error deleting news:', error);
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  
  const handleEdit = (id_news: number) => {
    const itemToEdit = news.find((item) => item.id_news === id_news);
    if (itemToEdit) {
      setEditItem(itemToEdit);
      setEditedTitle(itemToEdit.title_news); 
      setEditedDescription(itemToEdit.descript_news); 
      setErrorMessage('');
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditItem(null);
    setEditedTitle('');
    setEditedDescription('');
    setErrorMessage('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };
  const handleAddNews = async () => {
    if (newTitle.trim() === '' || newDescription.trim() === '') {
      setErrorMessage('Поля заголовка или описания не могут быть пустыми');
    } else {
      try {
        const formData = new FormData();
        formData.append('title_news', newTitle);
        formData.append('descript_news', newDescription);
        if (newImage) {
          formData.append('img', newImage);
        }

        const response = await fetch('http://localhost:7000/api/news', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setSuccessMessage('Новость успешно добавлена');
          setNewTitle('');
          setNewDescription('');
          setNewImage(null);
          setTimeout(() => {
            setSuccessMessage('');
            window.location.reload();
          }, 2000);
        } else {
          console.error('Failed to add news:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding news:', error);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!editItem || editedTitle.trim() === '' || editedDescription.trim() === '') {
      setErrorMessage('Поля заголовка, описания и изображения не могут быть пустыми');
    } else {
      try {
        const url = `http://localhost:7000/api/news/${editItem.id_news}?title_news=${encodeURIComponent(editedTitle)}&descript_news=${encodeURIComponent(editedDescription)}`;
        const response = await fetch(url, {
          method: 'PUT',
        });

        if (response.ok) {
          console.log(`News with ID ${editItem.id_news} has been updated.`);
          handleCloseModal();
          
        } else {
          console.error('Failed to update news:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating news:', error);
      }
    }
  };

  return (
     <div className="flex flex-col justify-between" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="mb-4">
        <h1 className="text-2xl font-semibold mb-2">Добавление новости</h1>
        {errorMessage && (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}
        <div className="flex gap-4">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Заголовок"
            className="border p-2 rounded"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Описание"
            className="border p-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded"
          />
          <button onClick={handleAddNews} className="bg-blue-500 text-white px-4 py-2 rounded">Добавить новость</button>
        </div>
      </div>
    <div className="flex flex-col justify-between" style={{ minHeight: 'calc(100vh - 150px)' }}>
      <div>
      <h1 className="text-2xl font-semibold mb-2">Список новостей</h1>
        {news.map((item) => (
          <div className='flex p-3 border-b border-purple-800 justify-between' key={item.id_news}>
            <h3>{item.title_news}</h3>
            <div className='flex gap-6'>
              <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => handleDelete(item.id_news)}>Удалить</button>
              <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => handleEdit(item.id_news)}>Редактировать</button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mb-9'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {showModal && editItem && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Редактирование новости</h2>
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Заголовок:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="border p-1 mb-2 block w-full"
              />
              <label htmlFor="description">Описание:</label>
              <textarea
                id="description"
                name="description"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="border p-1 mb-2 block w-full"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Сохранить</button>
              <button onClick={handleCloseModal} className="bg-gray-300 text-black px-4 py-2 rounded ml-2">Отмена</button>
              </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default NewsComponent;
