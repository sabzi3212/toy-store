import Gallery from "../../../Gallery/Gallery";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Gallery></Gallery>
            
        </div>
    );
};

export default Home;