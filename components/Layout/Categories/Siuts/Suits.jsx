import React, { useState, useEffect } from 'react';
import Info from '../../Main/Info/Info';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BsSuitHeart } from 'react-icons/bs';
import MyButton from '../../../../UI/Button/MyButton';
import { SlBasket } from 'react-icons/sl';


const Suits = () => {
    const [data, setData] = useState([])
    const { pathname } = useRouter()
    
    useEffect(() => {
        const getNaveItems = async () => {
            try {
                const resp = await axios.get('http://localhost:3001/categories');
                const respData = resp.data;
                setData(respData[0].suits); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getNaveItems();
    }, []);

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
            <div className="container">
                {/* <div className={s.categories}>
                    <Link href='/tops'>Топы</Link>
                    <Link href='/hoodies'>Худи</Link>
                    <Link href='/tShirts'>Футболки</Link>
                    <Link href='/shirts'>Рубашки</Link>
                </div> */}
                <div className='cards_content'>
                    {data.length !== 0 && data.map(card => (
                        <div className='card' key={card.id} >
                            <img src={card.Image} alt="image" width={300} height={350} />
                            <button onClick={() => postFavorites(card)}><BsSuitHeart className='heart' /></button>
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
            <Info />



        </>
    );
};

export default Suits;