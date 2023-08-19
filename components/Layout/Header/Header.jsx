import Link from "next/link";
import { FcPhoneAndroid } from 'react-icons/fc';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import logo from '../../../assets/logo/header-logo.png'
import Image from "next/image";
import s from './Header.module.scss';
import React, { useState, useEffect } from "react";
import MyInput from '../../../UI/Input/MyInput';
import MyButton from "../../../UI/Button/MyButton";
import BasketZero from "../Basket/BasketZero/BasketZero";
import { useRouter } from 'next/router';
import FavoritesZero from "../FavoritesZero/FavoritesZero";

const Header = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [show, setShow] = useState(true);
    const [favShow, setFavShow] = useState(true);
    const [basketCount, setBasketCount] = useState([]);
    const [favorites, setFavorites] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const getData = async () => {
            const resp = await fetch('http://localhost:3001/basket')
            const data = await resp.json()
            setBasketCount(data.length)
        }
        getData()
    }, [])
  
    const openBasket = () => {
        if (basketCount > 0) {
            router.push('/basket');
        } else {
            setShow(true);
        }
    }
    
    const openFavorites = () => {
        if (favorites) { 
            router.push('/favorites');
        } else {
            setFavShow(true);
        }
    }

    const openModal = () => {
        setModalIsOpen(true)
    }

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header_content}>
                    <div className={s.header_info}>
                        <CiLocationOn size={24} />
                        <Link href='/'>Киевская 37</Link>
                        <a className={s.header_logo} href="tel:+996705551546">
                            <FcPhoneAndroid size={24} />
                            +996 705 551 546
                        </a>
                    </div>
                    <Link className={s.header_logo} href='/'>
                        <Image src={logo} width={160} height={40} alt="img" />
                    </Link>
                    <div className={s.header_search}>
                        <MyInput
                            style={{ paddingLeft: '30px' }}
                            type='text'
                            placeholder='Поиск'
                            search
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <MyButton type="submit">Найти</MyButton>
                    </div>
                    <div className={s.header_favorites} >
                        <Link href='/favorites'>
                        <button onClick={() => openFavorites}>
                            <AiOutlineHeart size={24} />
                        </button>
                        </Link>
                        <Link href='/basket'>
                            <button onClick={() => openBasket}>
                            <BiShoppingBag size={24} />
                            </button>
                            <span style={{background: 'none', color: '#000'}}>{basketCount}</span>
                        </Link>
                    </div>
                    <Link href='/login' className={s.auth}>
                        <button  onClick={openModal}></button>
                        <BsFillPersonFill
                            size={24}
                        />
                    </Link>
                </div>
                <div className={s.header_goods}>
                    <Link className={s.header_link} href='/novelties'>Новинки</Link>
                    <Link className={s.header_link} href='/dresses'>Платья</Link>
                    <Link className={s.header_link} href='/top'>Верх</Link>
                    <Link className={s.header_link} href='/bottom'>НИЗ</Link>
                    <Link className={s.header_link} href='/suits'>Костюмы</Link>
                    <Link className={s.header_link} href='/'>#Boorivagirls</Link>
                </div>
                <hr style={{ marginTop: '16px' }} />
            </div>
            {/* <BasketZero show={show} setShow={setShow} /> */}
            {/* <FavoritesZero show={favShow} setShow={setFavShow}/> */}
        </header>
    );
    };

export default Header;