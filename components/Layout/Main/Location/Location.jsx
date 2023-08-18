import Image from 'next/image';
import s from './Location.module.scss';
import locImg from '../../../../assets/Images/collection-img.png';
import locMap from '../../../../assets/logo/collection-map.png';
import { BsSuitHeart } from 'react-icons/bs'
import MyButton from '../../../../UI/Button/MyButton';
import Link from 'next/link';

const Location = () => {
    return (
        <section className={s.location}>
            <div className="container">
                <div className={s.location_elements}>
                    <div className={s.location_content}>
                        <p className={s.title}>BOORIVA STORE</p>
                        <p className={s.location_title}>г.Киев,  ул. Нижний вал,  37 <br /> <br /> Ежедневно с 11:00 до 21:00</p>
                        <div className={s.location_img}>
                            <Image src={locImg} alt='img' width={560} height={643} />
                        </div>
                        <BsSuitHeart className={s.right_heart} width={60} height={60} />
                        <p className={s.location_desc}>Ты можешь заказать примерку  понравившейся вещи или просто заглянуть, гуляя по Подолу, и примерять что-то из в наличии</p>
                        <BsSuitHeart className={s.left_heart} />
                    </div>

                    <MyButton className={s.desc}>
                        <Link href='/suits'><b>проложить маршрут</b></Link>
                    </MyButton>
                    <div className={s.location_map}>
                        <Image src={locMap} width={273} height={246} alt='img' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;