import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold mt-10'>Check out our toy snapshots</h2>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/WK6r6VT/isaac-martin-C09-NUA6a-M2o-unsplash.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/5YmrbtH/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/w4FbBx3/giorgio-trovato-0-CZwu-Zhi-C84-unsplash.jpg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/cFcgFc8/michael-fousert-Kv2hu25-Rx2s-unsplash.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/mXh56bJ/jeong-pei-8cr-KCgb-KBs-unsplash.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/h22BjRW/louise-smith-Sdmc-VAn-WQ-c-unsplash.jpg" />
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Gallery;