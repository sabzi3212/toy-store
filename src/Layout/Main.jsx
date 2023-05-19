import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import NavigationBar from '../pages/Shared/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;