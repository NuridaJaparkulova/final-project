import Link from 'next/link';
import s from './Payment.module.scss'
const Payment = () => {
    return (
        <div className='payment'>
             <div className='basket_elements' >
                        <Link href={'/basket'}>Корзина</Link>
                        <Link href={'/contacts'}>Контакты</Link>
                        <Link href={'/delivery'}>Доставка</Link>
                        <Link href={'/payment'}>Оплата</Link>
                        <Link href={'/order'}>Заказ оформлен</Link>
                    </div>
            payment
        </div>
    );
};

export default Payment;