import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);


const Gallery = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://www.jamesedition.com/stories/wp-content/uploads/2021/06/photo-950x628.png" alt="Car" className="w-full h-auto object-cover" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Cadillac_Series_6400_Eldorado_Biarritz_%2822022010200%29.jpg/1024px-Cadillac_Series_6400_Eldorado_Biarritz_%2822022010200%29.jpg" alt="Car" className="w-full h-auto object-cover" /></SwiperSlide>
          <SwiperSlide><img src="https://www.vh.ma/wp-content/uploads/2020/08/Jaguar-E-Type-ouverture-770x385.jpg" alt="Car" className="w-full h-auto object-cover" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn2.mecum.com/auctions/sc0517/sc0517-282166/images/sc0517-282166_12.jpg?1494711705000" alt="Car" className="w-full h-auto object-cover" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn.dealeraccelerate.com/cmc/1/108/6344/1920x1440/1950-chevrolet-bel-air" alt="Car" className="w-full h-auto object-cover" /></SwiperSlide>
          <SwiperSlide><img src="https://images.classic.com/vehicles/442d998792fc9f848278e129e4def17825f2e755.jpg?w=672&h=576" alt="Car" className="w-full h-auto object-cover" /></SwiperSlide>
        </Swiper>
        <div className="flex justify-center mt-4">
          <div className="swiper-button-prev mr-2"></div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next ml-2"></div>
        </div>
      </div>
    </section>
  );
};


// const Gallery = () => {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8">Gallery</h2>
//         <Swiper navigation pagination={{ clickable: true }} className="mySwiper">
//           <SwiperSlide><img src="https://www.jamesedition.com/stories/wp-content/uploads/2021/06/photo-950x628.png" alt="Car" /></SwiperSlide>
//           <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Cadillac_Series_6400_Eldorado_Biarritz_%2822022010200%29.jpg/1024px-Cadillac_Series_6400_Eldorado_Biarritz_%2822022010200%29.jpg" alt="Car" /></SwiperSlide>
//           <SwiperSlide><img src="https://www.vh.ma/wp-content/uploads/2020/08/Jaguar-E-Type-ouverture-770x385.jpg" alt="Car" /></SwiperSlide>
//           <SwiperSlide><img src="https://cdn2.mecum.com/auctions/sc0517/sc0517-282166/images/sc0517-282166_12.jpg?1494711705000" alt="Car" /></SwiperSlide>
//           <SwiperSlide><img src="https://cdn.dealeraccelerate.com/cmc/1/108/6344/1920x1440/1950-chevrolet-bel-air" alt="Car" /></SwiperSlide>
//           <SwiperSlide><img src="https://images.classic.com/vehicles/442d998792fc9f848278e129e4def17825f2e755.jpg?w=672&h=576" alt="Car" /></SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

export default Gallery;