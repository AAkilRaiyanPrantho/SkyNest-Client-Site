import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Headings from "../../Shared/Headings/Headings";
import Coupons from "../Coupons/Coupons";
import About from "../About/About";



const Home = () => {
    return (
        <div>
            <Helmet>
        <title>SkyNest || Home</title>
      </Helmet>
            <Banner></Banner>
            <Headings mainHeading={'Flash Deals'} subHeading={'Get the best deals'}></Headings>
            <Coupons></Coupons>
            <Headings mainHeading={'About'} subHeading={'Know about our building'}></Headings>
            <div className="flex items-center mx-auto justify-center"><About></About></div>
            
            <Headings mainHeading={'Where to Find Us?'} subHeading={'Map View of our location'}></Headings>
            
        </div>
    );
};

export default Home;