import React from 'react';
import FeaturedCarCard from './FeaturedCarCard';

const cars = [
  {
    makeAndModel: "1967 Mustang",
    description: "Classic American muscle car",
    image: "https://bringatrailer.com/wp-content/uploads/2020/01/1969_chevrolet_camaro_rsss_15819612898a42a7ce4081969_chevrolet_camaro_rsss_15793254205ef66e7dff9f98764d20190718_140621.jpg?fit=940%2C626",
  },
  {
    makeAndModel: "1969 Camaro",
    description: "Iconic Chevy muscle car",
    image: "https://image.hmn.com/DgqyL_DxbK02sgpoqcOKU2Q8lo4=/820x545/uimage/94282981.jpg",
  },
  {
    makeAndModel: "1970 Challenger",
    description: "Classic Dodge muscle car",
    image: "https://cdn1.mecum.com/auctions/fl0120/fl0120-396991/images/1-1573484485243.jpg?1576714200000",
  },
];

const FeaturedCars = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <FeaturedCarCard key={car.makeAndModel} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;