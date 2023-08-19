import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useRouter } from 'next/router';
import { store } from './../../store/store';
import { Provider } from "react-redux";

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <>
            <Provider store={store} >
                {router.pathname.includes("/register")
                    || router.pathname.includes("/login") ? null : <Header />}
                {children}
                {router.pathname.includes("/register")
                    || router.pathname.includes("/login") ? null : <Footer />}
            </Provider>
        </>
    );
};

export default Layout;