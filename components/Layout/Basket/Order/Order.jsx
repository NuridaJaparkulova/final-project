import s from './Order.module.scss'
import Link from 'next/link';

const Order = () => {
    return (
        <div className='order'>
             <div className='basket_elements' >
                        <Link href={'/basket'}>Корзина</Link>
                        <Link href={'/contacts'}>Контакты</Link>
                        <Link href={'/delivery'}>Доставка</Link>
                        <Link href={'/payment'}>Оплата</Link>
                        <Link href={'/order'}>Заказ оформлен</Link>
                    </div>
            order
        </div>
    );
};

export default Order;