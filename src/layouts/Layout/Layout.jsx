import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from "../Header/Header";
import Forgot from '../../Login/Forgot';

const Layout = ({setToken}) => {
    const location = useLocation();

    const hiddenPath = ['/login' ,'/forgotpsw'];

    const isHiddenPath = hiddenPath.includes(location.pathname);
    return ( 
    <div>
        {/* <Header /> */}
        {!isHiddenPath &&(<Sidebar 
        setToken={setToken} /> 
        
    )};
        <Outlet />
    </div>
     );
}

export default Layout;