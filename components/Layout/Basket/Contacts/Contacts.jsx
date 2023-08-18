import s from './Contacts.module.scss'
import Link from 'next/link';
    
const Contacts = () => {
    return (
        <div className='contacts'>
             <div className='basket_elements' >
                        <Link href={'/basket'}>Корзина</Link>
                        <a href="#footer">Контакты</a>
                        <Link href={'/delivery'}>Доставка</Link>
                        <Link href={'/payment'}>Оплата</Link>
                        <Link href={'/order'}>Заказ оформлен</Link>
                    </div>
            <div> contacts</div>
        </div>
    );
};
<div> contacts</div>

export default Contacts;