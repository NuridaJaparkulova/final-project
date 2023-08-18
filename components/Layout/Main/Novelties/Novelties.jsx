import s from './Novelties.module.scss';
import { BsSuitHeart } from 'react-icons/bs';
import { PiWaveSineThin } from 'react-icons/pi'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyButton from '../../../../UI/Button/MyButton';
import { SlBasket } from 'react-icons/sl';
import Link from 'next/link';

const Novelties = () => {

    // const [cardInBasket, setCardInBasket] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getNaveItems = async () => {
            const resp = await axios.get('http://localhost:3001/categories')
            const respData = await resp.data
            setData(respData[0].news)
        }
        getNaveItems()
    }, [])

    // if (cardInBasket) {
    //     s.background = 'red';
    // } else {
    //     s.background = 'none';
    // }

    const postBasket = async (card) => {
        const resp = await axios.post('http://localhost:3001/basket', card)
        const data = await resp.data
        console.log(data)
    }
    const postFavorites = async (card) => {
        const resp = await axios.post('http://localhost:3001/favorites', card)
        const data = await resp.data
        console.log(data)
    }

    return (
        <section className={s.novelties}>
            <div className="container">
                <div className={s.novelties_title}>
                    НОВИНКИ
                    <div className={s.title_elements}>
                        <p>НОВИНКИ</p>
                        <PiWaveSineThin className={s.icon} />
                    </div>
                </div>
                <div className={s.cards_content}>
                    {data.length !== 0 && data.map(card => (
                        <div className={s.card} key={card.id} >
                            <img src={card.Image} alt="image" width={350} height={435} />
                            <hr style={{ background: 'red', margin: '10px 0 10px 0' }} />
                            <button onClick={() => postFavorites(card)}><BsSuitHeart className={s.heart} /></button>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                <h3 className={s.card_title}>{card?.title}</h3>
                                <p className={s.card_price}> {card?.price}</p>
                            </div>
                            <MyButton onClick={() => postBasket(card)} className={s.card_button}>В корзину<SlBasket className={s.basket_icon} size={15} />
                            </MyButton>
                        </div>
                    ))}
                </div>
                <MyButton className={s.products}>
                    <Link href='/novelties'><b>Смотреть все</b></Link>
                </MyButton>
            </div>
        </section>
    );
};

export default Novelties;