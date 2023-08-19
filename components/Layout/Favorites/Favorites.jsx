import s from './Favorites.module.scss';
import { useEffect, useState } from 'react';

const Favorites = () => {
    const [productsFavorites, setProductsFavorites] = useState([])

    useEffect(() => {
        const getProductsFavorites = async () => {
            const resp = await fetch('http://localhost:3001/favorites')
            const respData = await resp.json()
            setProductsFavorites(respData)
        }
        getProductsFavorites()
    }, [])

    
    return (
        <div className={s.favorites}>
            <div className="container">
                <div className='cards_content'>
                    {productsFavorites.length !== 0 && productsFavorites.map(card => (
                        <div className='card' key={card.id} >
                            <img src={card.Image} alt="image" width={300} height={350} />
                            <hr style={{ background: 'red', margin: '10px 0 10px 0' }} />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                <h3 className='card_title'>{card?.title}</h3>
                                <p className='card_price'> {card?.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorites;