import s from './Sidebar.module.scss';
import { Link } from 'next/link';

const Sidebar = () => {
    return (
        <>
            <section className={s.sidebar}>
                <div className="container">
                    <div className={s.sidebar_content}>
                        <div className={s.left}>
                            <div className={s.left_content}>
                                <div className={s.categories}>
                                    <h4 className={s.title}>КАТЕГОРИИ:</h4>
                                    <Link href='/dresses'></Link>
                                    <Link href='/top'></Link>
                                    <Link href='/bottom'></Link>
                                    <Link href='/suits'></Link>
                                </div>
                                <div className={s.price}>
                                    <h4 className={s.title}>ЦЕНЫ:</h4>
                                    <Link href='/'><ul>Все цены</ul></Link>
                                    <Link href='/'><ul>до 2500</ul></Link>
                                    <Link href='/'><ul>2500 — 5000</ul></Link>
                                    <Link href='/'><ul>5000 — 10000</ul></Link>
                                    <Link href='/'><ul>от 10000</ul></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sidebar;