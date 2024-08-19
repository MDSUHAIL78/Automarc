import React from 'react';

const AutoMarcWallpaper = () => {
  const posts = [
    {
      imageUrl: "/car3.webp",
      type: "image"
    },
    {
      imageUrl: "/car2.webp",
      type: "image"
    },
    {
      imageUrl: "/car1.webp",
      type: "image"
    },
    {
      imageUrl: "car6.webp",
      type: "image"
    },
    {
      imageUrl: "car4.webp",
      type: "image"
    },
    {
      imageUrl: "/car5.webp",
      type: "image"
    },
  ];

  return (
    <div id='wallpaper' className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 text-white py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">Auto Marc Wallpaper</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="relative bg-gray-900 p-4 shadow-lg">
              <img 
                src={post.imageUrl} 
                alt={`Post ${index + 1}`} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoMarcWallpaper;
