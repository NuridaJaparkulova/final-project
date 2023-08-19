import React, { useState, useEffect } from 'react';
import Info from '../../Main/Info/Info';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BsSuitHeart } from 'react-icons/bs';
import MyButton from '../../../../UI/Button/MyButton';
import { SlBasket } from 'react-icons/sl';
import { useGetAllClothesQuery } from '../../../../services/getCategories';


const Suits = () => {
    const {data: newData} = useGetAllClothesQuery();
    console.log(newData)   

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
                <div className='cards_content'>
                {newData && newData[0].suits.map(card => (
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