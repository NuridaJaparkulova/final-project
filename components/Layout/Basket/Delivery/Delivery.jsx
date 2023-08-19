import MyButton from '../../../../UI/Button/MyButton';
import MyInput from '../../../../UI/Input/MyInput';
import s from './Delivery.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import axios from 'axios';
import cl from 'classnames'

const Delivery = () => {
    const [productsBasket, setProductsBasket] = useState([])

    useEffect(() => {
        const getProductsBasket = async () => {
            const resp = await fetch('http://localhost:3001/basket')
            const respData = await resp.json()
            setProductsBasket(respData)
        }
        getProductsBasket()
    }, [])

    return (
        <div className={s.delivery}>
            <div className="container">
                <div className='basket_elements' >
                    <Link href={'/basket'}>Корзина</Link>
                    <Link href={'/contacts'}>Контакты</Link>
                    <Link href={'/delivery'}>Доставка</Link>
                    <Link href={'/payment'}>Оплата</Link>
                    <Link href={'/order'}>Заказ оформлен</Link>
                </div>
                <div className={s.delivery_elements}>
                    <div className={s.delivery_left}>
                        <div className={cl(s.delivery_data, s.d_flex)}>
                            <div>
                                <h2>Контактные <br /> данные</h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }} >
                                <MyInput
                                    className={s.delivery_input}
                                    style={{ paddingLeft: '30px' }}
                                    type='text'
                                    placeholder='Имя'
                                />
                                <MyInput
                                    className={s.delivery_input}
                                    style={{ paddingLeft: '30px' }}
                                    type='text'
                                    placeholder='Фамилия'
                                />
                                <MyInput
                                    className={s.delivery_input}
                                    style={{ paddingLeft: '30px' }}
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type='tel'
                                    required
                                    placeholder='Номер телефона'
                                />
                                <MyInput
                                    className={s.delivery_input}
                                    style={{ paddingLeft: '30px' }}
                                    type='email'
                                    placeholder='E-mail'
                                />
                            </div>
                        </div>
                        <div className={cl(s.delivery_method, s.d_flex)}>
                            <h2>Способ <br /> доставки</h2>
                            <div >
                                <label for="delivery">
                                    <MyInput type="radio" id="delivery" />
                                    Доставка в отделение Новой почты — <br /> согласно тарифам НП
                                </label>
                                <label for="delivery">
                                    <MyInput type="radio" id="delivery" />
                                    Курьерская доставка Новой почты — <br /> согласно тарифам НП
                                </label>
                                <label for="delivery">
                                    <MyInput type="radio" id="delivery" />
                                    Самовывоз с нашего шоурума — <br /> бесплатно
                                </label>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px' }} >
                                    <p >г.Бишкек,  ул. Киевская , 37 Ежедневно с 11:00 до 21:00</p>
                                </div>
                                <MyInput className={s.delivery_comment} placeholder='Комментарий к заказу' />
                            </div>
                        </div>
                        <div className={cl(s.delivery_order, s.d_flex)}>
                            <h2>Способ <br /> оплаты </h2>
                            <div>
                                <label for="delivery">
                                    <MyInput type="radio" id="delivery" />
                                    Каротой Visa / MasterCard
                                </label>
                                <label for="delivery">
                                    <MyInput type="radio" id="delivery" />
                                    Наличкой при получении
                                </label>
                                <MyInput className={s.delivery_card} placeholder='Номер карты  boorivasis' />
                                <label for="delivery">
                                    <MyInput type="radio" id="delivery" />
                                    Я уверена в заказе, со мной можно не связываться
                                </label>

                            </div>
                        </div>
                        <MyButton className={s.delivery_button}>
                            <Link href='/novelties'><b>Подтвердить заказ</b></Link>
                        </MyButton>
                    </div>
                    <div className={s.delivery_right}>
                        <h2 className={s.products}>Товары в Корзине: </h2>
                        <div className={s.card_content}>
                            {productsBasket.length !== 0 && productsBasket.map(card => (
                                <div className={s.card} key={card.id} >
                                    <div>
                                        <img src={card.Image} alt="image" width={155} height={180} />
                                    </div>
                                    <div className={s.basket_el}>
                                        <div >
                                            <h3 className='card_title'>{card?.title}</h3>
                                            <p className='card_price'> {card?.price}</p>
                                        </div>
                                        <MyButton>
                                            <BsTrash3 size={20} />
                                        </MyButton>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h4>Cумма заказа: </h4>
                        <h4>Стоимость доставки:  <b>бесплатно</b></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;