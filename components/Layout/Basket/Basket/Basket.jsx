import { useEffect,useState } from 'react';
import Link from 'next/link';
import MyButton from '../../../../UI/Button/MyButton';
import { useRouter } from 'next/router';
import s from './Basket.module.scss';
import { BsTrash3 } from 'react-icons/bs';
import axios from 'axios';
import { useGetAllClothesQuery } from '../../../../services/getCategories';


const Basket = () => {

    const route = useRouter()

    const [productsBasket, setProductsBasket] = useState([])

    useEffect(() => {
       const basketRoute = async () => {
            if(productsBasket.length == 0) {
                route.push('basketZero')
            } else {
                route.push('basket')
            }
        }
    }, [])

    const {data: newData} = useGetAllClothesQuery();
    console.log(newData)   

   
    return (
        <>
            <div className='basket'>
                <div className="container">
                    <div className='basket_elements' >
                        <Link href={'/basket'}>Корзина</Link>
                        <a href="#footer">Контакты</a>
                        <Link href={'/delivery'}>Оформить заказ</Link>
                        <Link href={'/order'}>Заказ оформлен</Link>
                    </div>

                    <div className='cards_content'>
                    {newData && newData[0].dresses.map(card => (
                        <div className='card' key={card.id} >
                            <img src={card.Image} alt="image" width={300} height={350} />
                            <hr style={{ background: 'red', margin: '10px 0 10px 0' }} />
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
                </div>
            </div>
        </>
    );
};

export default Basket;