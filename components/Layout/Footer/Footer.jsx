import Image from 'next/image';
import s from './Footer.module.scss';
import footerLogo from '../../../assets/logo/header-logo.png';
import { BsInstagram } from 'react-icons/bs';
import { PiTelegramLogo } from 'react-icons/pi';
import adminImg from '../../../assets/Images/footer-img.jpg';
import  Link  from 'next/link';

const Footer = () => {
    return (
        <footer id="footer" className={s.footer}>
            <div className="container">
                <div className={s.footer_content}>
                    <div className={s.logo}>
                        <Image src={footerLogo} width={96} height={24} alt='img' />
                    </div>
                    <div className={s.info}>
                        <h2>Инфо</h2>
                        <p><Link href='/contacts'>Контакты</Link></p>
                        <p><Link href='/'>Обмен и возврат</Link></p>
                        <p><Link href='/'>Доставка и оплата</Link></p>
                    </div>
                    <div className={s.address}>
                        <h2>Наш адрес</h2>
                        <p><Link href='/contacts'>г.Бишкек, ул. Киевская, 37</Link></p>
                        <p><Link href='/contacts'>Пн — Вс: с 11:00 до 21:00</Link></p>
                    </div>
                    <div className={s.sNetwork}>
                        <h2>Соц. сети</h2>
                        <Link href='/' >
                        <BsInstagram className={s.footer_icon} />
                        </Link>
                        <Link href='/' > 
                        <PiTelegramLogo className={s.footer_icon} />
                        </Link>

                    </div>
                    <div className={s.massege}>
                        <div className={s.admin_content}>
                            <Image src={adminImg} width={50} height={50} alt='admin' className={s.admin_img} />
                            <p style={{ width: '156px', marginTop: '0' }}>Нам важно знать, что ты думаешь про нас! Просто напиши мне!</p>
                        </div>
                        <h2 style={{ marginTop: '20px', marginLeft: '70px' }}>Написать</h2>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;