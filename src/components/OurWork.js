import React from 'react';

const OurWorks = () => {
  const products = [
    {
      title: "Alloy Wheel",
      imageUrl: "/alloywheel.png",
    },
    {
      title: "Car Accessory",
      imageUrl: "/parts.png",
    },
    {
      title: "Performance & Carbon Parts",
      imageUrl: "/fibreparts.png",
    },
    {
      title: "Headlamps & Tail Lamps",
      imageUrl: "/light.png",
    },
    {
      title: "Body Kit Upgrade",
      imageUrl: "/kit.png",
    },
    {
      title: "Car Exhaust System",
      imageUrl: "/exhaust.png",
    },
  ];

  return (
    <div id='products' className="bg-gray-900 text-white py-14">
      <div className="container mx-auto text-center">
        {/* <h1 className="text-4xl font-bold mb-2">OUR WORKS</h1> */}
        <p className="text-4xl font-bold mb-16">LUXURY CARS PRODUCTS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
