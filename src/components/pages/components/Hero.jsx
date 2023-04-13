import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?classic-cars')" }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Drive the Classics</h1>
        <p className="text-lg text-white mb-8">Experience the thrill of driving a classic car</p>
        <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600">View Cars</button>
      </div>
    </section>
  );
};

export default Hero;
