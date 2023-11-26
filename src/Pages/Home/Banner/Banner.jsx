import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
  };
  return (
    <Slider {...settings}>
      <div>
        <img className="w-full h-[800px]" src={banner1} alt="" />
      </div>
      <div>
      <img className="w-full h-[800px]" src={banner2} alt="" />
      </div>
      <div>
      <img className="w-full h-[800px]" src={banner3} alt="" />
      </div>
      <div>
      <img className="w-full h-[800px]" src={banner4} alt="" />
      </div>
      <div>
      <img className="w-full h-[800px]" src={banner5} alt="" />
      </div>
      <div>
      <img className="w-full h-[800px]" src={banner6} alt="" />
      </div>
      <div>
      <img className="w-full h-[800px]" src={banner7} alt="" />
      </div>
      <div>
      <img className="w-full h-[800px]" src={banner8} alt="" />
      </div>
      <div>
      <img className="w-full h-[800px]" src={banner9} alt="" />
      </div>
    </Slider>
  );
};

export default Banner;