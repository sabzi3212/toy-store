import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-4">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/Sry8rxq/yuri-shirota-p0h-Dzt-R46cw-unsplash.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div data-aos="flip-left">
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;