import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Novelties from './Novelties';
import Info from '../../Main/Info/Info';

const CardsList = () => {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:3001/products/categories/news');
                setCards(response.data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchCards();
    }, []);

    return (
        <>
            <div className={s.cards_list}>
                {cards.map((card) => (
                    <Novelties key={card.id} title={card.title} price={card.price} />
                ))}
            </div>
            <Info/>
        </>
    );
};

export default CardsList;