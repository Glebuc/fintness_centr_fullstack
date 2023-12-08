import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import axios from 'axios';


const apiCall = () => {
  axios.get('http://localhost:7000/api/news').then((data) => {
    console.log(data)
  })
}


const News = () => {
  return (
    <div>
     
      <section className="m-12 text-gray-800">
    <div className="block rounded-lg shadow-lg bg-white">
      <div className="flex flex-wrap items-center">
        <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/088.jpg" alt="Trendy Pants and Shoes"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">

          <div className="px-6 py-12 md:px-12">
            <h2 className="text-2xl font-bold mb-4">What's the secret of the great taste?</h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas
              ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit,
              inventore rem molestias laborum repudiandae corporis pariatur quo eius iste!
              Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.
            </p>
            <p className="text-gray-500">
              Commodi ut nisi assumenda alias maxime necessitatibus ad rem repellat explicabo,
              reiciendis illum suscipit iusto? Provident dignissimos similique, reiciendis
              inventore accusantium unde mollitia, deleniti quae atque error id perspiciatis
              illum. Laboriosam aperiam ab illo dignissimos obcaecati corporis similique a odio,
              optio iste quis placeat alias amet rerum sint quos dolor pariatur inventore
              possimus ad consequuntur fugiat perferendis consectetur laudantium.
            </p>
          </div>
          <button onClick={apiCall}>Make API Call</button>
        </div>
      </div>
    </div>
  </section>
      
    </div>
  );
}

export default News;
