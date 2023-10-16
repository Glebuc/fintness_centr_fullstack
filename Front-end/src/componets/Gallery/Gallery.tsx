import React from 'react';
import './../../index.css';
import Gallery1 from '../img/gallery1.jpg';
import Gallery2 from '../img/gallery2.webp';
import Gallery3 from '../img/gallery3.jpg'
import Gallery4 from '../img/gallery4.png';
import Gallery5 from '../img/gallery5.jpg';
import Gallery6 from '../img/gallery6.webp';
import Gallery7 from '../img/gallery7.jpg';
import Gallery8 from '../img/gallery8.jpg';


const Photo = () => {
    return (
        <div
          className="mx-auto max-w-screen-3xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Галлерея</h2>
          </div>
            <section className="bg-white dark:bg-gray-900">
              <div className="container px-6 py-10 mx-auto">
                  
                  <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                      <div className="w-full hover:scale-110"
                      
                      
                      >
                          <img src={Gallery1} alt="img1" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src={Gallery2} alt="img2" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src={Gallery3} alt="img3" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src={Gallery4} alt="img4" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src={Gallery5} alt="img5" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src={Gallery6} alt="img6" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src={Gallery7} alt="img7" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src={Gallery8} alt="img8" />
                      </div>
                  </div>
              </div>
          </section>
        </div>
    

    );
    };
    
    export default Photo;
    
    