import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-screen-2xl mx-auto"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;