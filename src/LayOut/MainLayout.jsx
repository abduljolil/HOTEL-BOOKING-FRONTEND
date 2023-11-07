import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Footer from './../Shared/Footer/Footer';

 
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;