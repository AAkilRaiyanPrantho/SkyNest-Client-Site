import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Coupons = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="card w-96 bg-yellow-500 text-yellow-50">
          <div className="card-body">
            <h2 className="card-title">1 Year Membership</h2>
            <p>Get 30% off on taking a one year membership pack</p>
            <div className="card-actions justify-end">
              <Link to={'/apartments'}><button className="btn btn-secondary text-yellow-100">Rent Now</button></Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card w-96 bg-gray-400 text-yellow-50">
          <div className="card-body">
            <h2 className="card-title">6 Month Membership</h2>
            <p>Get 20% off on taking a six month membership pack</p>
            <div className="card-actions justify-end">
              <Link to={'/apartments'}><button className="btn btn-secondary text-yellow-100">Rent Now</button></Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card w-96 bg-orange-900 text-yellow-50">
          <div className="card-body">
            <h2 className="card-title">Reference Discount</h2>
            <p>Refer a friend, and both you and your friend get a 10% discount on the next month's rent</p>
            <div className="card-actions justify-end">
              <Link to={'/apartments'}><button className="btn btn-secondary text-yellow-100">Rent Now</button></Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card w-96 bg-green-600 text-yellow-50">
          <div className="card-body">
            <h2 className="card-title">Student Discount</h2>
            <p>Students can receive a 15% discount on monthly rent with a valid student ID</p>
            <div className="card-actions justify-end">
              <Link to={'/apartments'}><button className="btn btn-secondary text-yellow-100">Rent Now</button></Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Coupons;
