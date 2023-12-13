import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface NewsItem {
  id_news: number;
  title_news: string;
  descript_news: string;
  img: string;
}

interface NewsResponse {
  count: number;
  rows: NewsItem[];
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:7000/api/news?page=${currentPage}&limit=10`);
        const responseData: NewsResponse = response.data;
        setNews(responseData.rows);
        setTotalPages(Math.ceil(responseData.count / 10)); // Предположим, что count - это общее количество новостей
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <section className="m-12 text-gray-800">
        <div className="block rounded-lg  shadow-lg bg-white">
          <div className="flex flex-wrap items-center justify-center">
            <div className="grow-0 shrink-0 basis-auto w-full h-full lg:w-6/12 xl:w-8/12">
              {loading ? (
                <h1 className="text-center">Загрузка...</h1>
              ) : (
                <>
                  {news.length ? (
                    <>
                      <ul>
                        {news.map((item: NewsItem) => (
                          <li key={item.id_news} className="flex m-5">
                            <img className="w-96 mx-11" src={'http://localhost:7000/' + item.img} alt={item.title_news} />
                            <div>
                              <h2 className="text-2xl">{item.title_news}</h2>
                              <p>{item.descript_news}</p>
                            </div>
                            <hr />
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-center mt-5">
                        <button className="mx-4 p-2 text-2xl" onClick={handlePrevPage} disabled={currentPage === 1}>
                        🢀
                        </button>
                        <span className='p-2'>
                            {currentPage} из {totalPages}
                        </span>
                        <button className="mx-4 p-2 text-2xl" onClick={handleNextPage} disabled={currentPage === totalPages}>
                        🢂
                        </button>
                      </div>
                    </>
                  ) : (
                    <h1 className="text-center">Здесь пока ничего нет</h1>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;