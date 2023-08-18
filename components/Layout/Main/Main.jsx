import Authorization from "../Authorization/Authorization";
import Login from "../Authorization/Login/Login";
import Register from "../Authorization/Register/Register";
import Collection from "./Collection/Collection";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Location from "./Location/Location";
import Novelties from "./Novelties/Novelties";
import Suits from "./Suits/Suits";
import TopProducts from "./TopProducts/TopProducts";

const Main = () => {
    return (
        <>
            <Hero />
            <Novelties />
            <Collection />
            <Location />
            <TopProducts />
            <Suits />
            <Info />
        </>
    );
};

export default Main;