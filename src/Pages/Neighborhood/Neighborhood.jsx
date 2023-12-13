
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const Neighborhood = () => {
    return (
        <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="hero max-lg:min-h-screen lg:h-[600px]" style={{backgroundImage: 'url(https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Schools For Children</h1>
     </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero max-lg:min-h-screen lg:h-[600px]" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Halleyparknovember.jpg/1200px-Halleyparknovember.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Park To Walk and Do OutDoor Activities</h1>
     </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero max-lg:min-h-screen lg:h-[600px]" style={{backgroundImage: 'url(https://myfrenchhospital.com/wp-content/uploads/2023/03/centre-alexis-vautrin.jpeg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Modern Hospital For Better HEalth Care</h1>
     </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero max-lg:min-h-screen lg:h-[600px]" style={{backgroundImage: 'url(https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Aldi%20store_produce%20area.jpg?itok=EIbPYvCA)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Supermarket For Your Daily Needs</h1>
     </div>
  </div>
</div></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Neighborhood;