import MyButton from '../../../UI/Button/MyButton';
import s from './FavoritesZero.module.scss';

const FavoritesZero = ({favShow, setFavShow}) => {
    const exitBasket = (e) => {
        if(e.target.classList.contains('favorites_zero')) {
            setFavShow(false)
        } 
    }
    return (
        <div onClick={exitBasket} style={{display: favShow ? 'flex' : 'none'}}  className={s.favorites_zero}>
        <div className={s.favorites_zero_block}>
            <h2 className={s.favorites_zero_title}>Избранные пустые</h2>
            <MyButton className={s.favorites_zero_btn}>Посмотреть товары</MyButton>     
            <span onClick={() => setShow(false)} className={s.favorites_zero_exit}>x</span> 
        </div>
    </div>
    );
};

export default FavoritesZero;


