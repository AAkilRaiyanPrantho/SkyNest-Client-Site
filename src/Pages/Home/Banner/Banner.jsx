// import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import banner1 from '../../../../assets/Banner Images (1).jpg'
import banner2 from '../../../../assets/Banner Images (2).jpg'
import banner3 from '../../../../assets/Banner Images (3).jpg'
import banner4 from '../../../../assets/Banner Images (4).jpg'
import banner5 from '../../../../assets/Banner Images (5).jpg'
import banner6 from '../../../../assets/Banner Images (6).webp'
import banner7 from '../../../../assets/Banner Images (7).webp'
import banner8 from '../../../../assets/Banner Images (8).jpg'
import banner9 from '../../../../assets/Banner Images (9).jpg'

const Banner = () => {

    
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
        <img className="w-full h-[800px]" src={banner1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full h-[800px]" src={banner2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full h-[800px]" src={banner3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full h-[800px]" src={banner4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full h-[800px]" src={banner5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full h-[800px]" src={banner6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full h-[800px]" src={banner7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full h-[800px]" src={banner8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full h-[800px]" src={banner9} alt="" />
      </SwiperSlide>

    </Swiper>
  );
};

export default Banner;