import React from 'react';
import './../../index.css';



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
                          <img src="../img/gallery1.jpg" alt="img1" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src="../img/gallery2.webp" alt="img2" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src="../img/gallery3.jpg" alt="img3" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src="../img/gallery4.png" alt="img4" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src="../img/gallery5.jpg" alt="img5" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src="../img/gallery6.webp" alt="img6" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src="../img/gallery7.jpg" alt="img7" />
                      </div>
          
                      <div className="w-full hover:scale-110">
                        <img src="../img/gallery8.jpg" alt="img8" />
                      </div>
                  </div>
              </div>
          </section>
        </div>
    

    );
    };
    
    export default Photo;
    
    