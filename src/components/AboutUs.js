import React from 'react';

const AboutUs = () => {
  const backgroundImageUrl = "car3.webp";

  return (
    <div id='about'
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 px-6">
        <h2 className="text-6xl font-extrabold mb-6">ABOUT US</h2>
        <p className="text-3xl leading-relaxed mb-6">
          Automarc, a name today that represents the aftermarket modification & <br /> customization in India at its best. 
          It was founded in 1990 with a spark in <br />mind to change the way the cars looked and felt.
          <br />
          With the changing time and progressive technologies, Automarc has been a <br />pioneer to find and develop the accessories 
          and electrical and electronic <br />solutions from around the globe to give the best to the clients.
        </p>
        <button className="px-6 py-2 bg-white text-black font-semibold rounded-full shadow-lg">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
