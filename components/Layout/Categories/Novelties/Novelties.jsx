import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Info from '../../Main/Info/Info';
import { BsSuitHeart } from 'react-icons/bs';
import MyButton from '../../../../UI/Button/MyButton';
import { SlBasket } from 'react-icons/sl';


const Novelties = () => {
    const [data, setData] = useState([])
    const { pathname } = useRouter()

    useEffect(() => {
        const getNaveItems = async () => {
            const resp = await axios.get(`http://localhost:3001/categories`)
            const respData = await resp.data
            setData(respData[0].news)
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
        <>
            <div className='cards'>
                <div className="container">
                    <div className='cards_content'>
                        {data.length !== 0 && data.map(card => (
                            <div className='card' key={card.id} >

                                <button onClick={() => postFavorites(card)}><BsSuitHeart className='heart' /></button>
                                <img src={card.Image} alt="image" width={300} height={350} />
                                <div className='card_elem'>
                                    <h3 className='card_title'>{card?.title}</h3>
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
            </div>
            <Info />
        </>
    );
};

export default Novelties;