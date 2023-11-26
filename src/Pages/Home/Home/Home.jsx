import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Headings from "../../Shared/Headings/Headings";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>SkyNest || Home</title>
      </Helmet>
            <h2>This is HOME</h2>
            <Banner></Banner>
            <Headings mainHeading={'About'} subHeading={'Know about our building'}></Headings>
        </div>
    );
};

export default Home;