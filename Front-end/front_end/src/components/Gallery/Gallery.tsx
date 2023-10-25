import React from 'react';
import './../../index.css';
import ItemPhoto from './ItemPhoto';




const Photo:React.FC = () => {
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
                    <ItemPhoto imagePath='/img/gallery1.jpg' altText='photo_gallery_1' />
                    <ItemPhoto imagePath='/img/gallery2.webp' altText='photo_gallery_2' />
                    <ItemPhoto imagePath='/img/gallery3.jpg' altText='photo_gallery_3' />
                    <ItemPhoto imagePath='/img/gallery4.png' altText='photo_gallery_4' />
                    <ItemPhoto imagePath='/img/gallery5.jpg' altText='photo_gallery_5' />
                    <ItemPhoto imagePath='/img/gallery6.webp' altText='photo_gallery_6' />
                    <ItemPhoto imagePath='/img/gallery7.jpg' altText='photo_gallery_7' />
                    <ItemPhoto imagePath='/img/gallery8.jpg' altText='photo_gallery_8' />
                  </div>
              </div>
          </section>
        </div>
    

    );
    };
    
    export default Photo;
    
    