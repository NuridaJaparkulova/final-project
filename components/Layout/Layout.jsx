import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <>
            {router.pathname.includes("/register") || router.pathname.includes("/login") ? null :  <Header /> }
            {children}
            {router.pathname.includes("/register") || router.pathname.includes("/login") ? null : <Footer />  }
        </>
    );
};

export default Layout;