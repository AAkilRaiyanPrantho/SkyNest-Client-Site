import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Headings from "../../Shared/Headings/Headings";
import Coupons from "../Coupons/Coupons";



const Home = () => {
    return (
        <div>
            <Helmet>
        <title>SkyNest || Home</title>
      </Helmet>
            <h2>This is HOME</h2>
            <Banner></Banner>
            <Headings mainHeading={'Flash Deals'} subHeading={'Get the best deals'}></Headings>
            <Coupons></Coupons>
            <Headings mainHeading={'About'} subHeading={'Know about our building'}></Headings>
            
            <Headings mainHeading={'Where to Find Us?'} subHeading={'Map View of our location'}></Headings>
            
        </div>
    );
};

export default Home;