import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>SkyNest || Home</title>
      </Helmet>
            <h2>This is HOME</h2>
            <Banner></Banner>
        </div>
    );
};

export default Home;