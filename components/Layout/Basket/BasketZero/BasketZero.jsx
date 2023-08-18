import { SlBasket } from 'react-icons/sl';
import s from './BasketZero.module.scss';
import MyButton from '../../../../UI/Button/MyButton';
// import {useEffect, useState} from 'react';
// import axios from 'axios';

const BasketZero = ({show, setShow}) => {
    const exitBasket = (e) => {
        if(e.target.classList.contains('basket_zero')) {
            setShow(false)
        } 
    }

    return (
        <div onClick={exitBasket} style={{display: show ? 'flex' : 'none'}}  className={s.basket_zero}>
            <div className={s.basket_zero_block}>
                <SlBasket className={s.basket_zero_icon} size={50}/>
                <h2 className={s.basket_zero_title}>Корзина пустая</h2>
                <MyButton className={s.basket_zero_btn}>Посмотреть товары</MyButton>     
                <span onClick={() => setShow(false)} className={s.basket_zero_exit}>x</span> 
            </div>
        </div>
    );
};

export default BasketZero;