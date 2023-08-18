import s from './CardsInfo.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsSuitHeart } from 'react-icons/bs';
import { SlBasket } from 'react-icons/sl';
import MyButton from '../../UI/Button/MyButton';


const CardsInfo = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getNaveItems = async () => {
            const resp = await axios.get(`http://localhost:3001/categories`)
            const respData = await resp.data
            setData(respData[0].dresses)
        }
        getNaveItems()
    }, [])
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
        <div className="container">
            <div className={s.cards_content} >
                {data.length !== 0 && data.map(card => (
                    <div className='card' key={card.id} >
                        <img src={card.Image} alt="image" width={300} height={350} />
                        <button onClick={() => postFavorites(card)}><BsSuitHeart className='heart' /></button>
                        <div className={s.card_elem}>
                            <h3 className='card_title'>{card?.title}</h3>
                            <p className='card_desc'>{card?.desc}</p>
                            <p className='card_price'>{card?.price}</p>
                        </div>
                        <MyButton
                            onClick={() => postBasket(card)}
                            className='card_button'>
                            В корзину
                            <SlBasket
                                className='basket_icon'
                                size={15} />
                        </MyButton>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardsInfo;