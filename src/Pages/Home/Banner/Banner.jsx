// import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";



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
        {/* <img className="w-full h-[800px]" src={banner1} alt="" /> */}
        <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/5LgBLbq/Banner-Images-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pr-[1000px] lg:text-left">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">Elevate Your Living</h1>
                <p className="mb-5 font-semibold text-xl text-orange-300">
                Modern Apartments for the Modern You!
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <img className="w-full h-[800px]" src={banner2} alt="" /> */}
        <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/FzN3h5K/Banner-Images-2.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">Your Dream Space Awaits</h1>
                <p className="mb-5 font-semibold text-xl text-orange-300">
                Stylish Apartments with a View
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <img className="w-full h-[800px]" src={banner3} alt="" /> */}
        <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/TWHrbRV/modern-dining-room-ideas-4147451-hero-d6333998f8b34620adfd4d99ac732586.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pl-[1000px] lg:text-right">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">Where Comfort Meets Convenience</h1>
                <p className="mb-5 font-semibold text-xl text-orange-300">
                Discover Your New Apartment Home
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <img className="w-full h-[800px]" src={banner4} alt="" /> */}
        <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/QnV8QxL/Banner-Images-4.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pr-[1000px] lg:text-left">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">Beyond Walls, We Build Homes</h1>
                <p className="mb-5 font-semibold text-xl text-orange-300">
                Welcome to Your Urban Oasis
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <img className="w-full h-[800px]" src={banner5} alt="" /> */}
        <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/vsw2QYP/Banner-Images-5.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">Home is Where the Heart Is</h1>
                <p className="mb-5 font-semibold text-xl text-orange-300">
                Find Yours in Our Stunning Apartments
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <img className="w-full h-[800px]" src={banner6} alt="" /> */}
        <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/2F3S07T/Banner-Images-6.webp)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pl-[1000px] lg:text-right">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">Unwind in Style</h1>
                <p className="mb-5 font-semibold text-xl text-orange-300">
                Luxury Living Redefined in Every Apartment
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <img className="w-full h-[800px]" src={banner7} alt="" /> */}
        <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/4pvKxhD/Banner-Images-7.webp)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pr-[1000px] lg:text-left">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">Living, Evolved</h1>
                <p className="mb-5 font-semibold text-xl text-orange-300">
                Trendy Apartments for the Modern Lifestyle
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <img className="w-full h-[800px]" src={banner8} alt="" /> */}
        <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/WFL0Ch9/Banner-Images-8.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">Seamless Living, Seamless Style</h1>
                <p className="mb-5 font-semibold text-xl text-orange-300">
                Your Ideal Apartment Awaits
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <img className="w-full h-[800px]" src={banner9} alt="" /> */}
        <div
            className="hero w-full max-lg:h-[400px] lg:h-[800px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/h8FRB18/Banner-Images-9.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-[#1515155b] to-[#1515153d]"></div>
            <div className="hero-content text-center text-neutral-content lg:pl-[1000px] lg:text-right">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic text-yellow-100">Step into Elegance</h1>
                <p className="mb-5 font-semibold text-xl text-orange-300">
                Experience the Charm of Our Apartments
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
