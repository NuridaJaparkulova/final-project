import s from './Delivery.module.scss';
import Link from 'next/link';


const Delivery = () => {
    return (
        <div className='delivery'>
             <div className='basket_elements' >
                        <Link href={'/basket'}>Корзина</Link>
                        <Link href={'/contacts'}>Контакты</Link>
                        <Link href={'/delivery'}>Доставка</Link>
                        <Link href={'/payment'}>Оплата</Link>
                        <Link href={'/order'}>Заказ оформлен</Link>
                    </div>
            delivery
        </div>
    );
};

export default Delivery;