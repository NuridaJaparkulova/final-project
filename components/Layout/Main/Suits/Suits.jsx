import Image from 'next/image';
import s from './Suits.module.scss';
import cardSt from '../../../../assets/Images/suit-st.png';
import cardNd from '../../../../assets/Images/suit-nd.png';
import cardRd from '../../../../assets/Images/suit-rd.png';
import cardTh from '../../../../assets/Images/suit-th.png';
import cl from 'classnames';
import { PiWaveSineThin } from 'react-icons/pi'
import Link from "next/link";
import MyButton from '../../../../UI/Button/MyButton';



const Suits = () => {
    return (
        <section className={s.suits}>
            <div className='container'>
                <div className={s.suits_title}>
                    КОСТЮМЫ
                    <div className={s.title_elements}>
                        <p>КОСТЮМЫ</p>
                        <PiWaveSineThin className={s.icon} />
                    </div>
                </div>
                <div className={s.suits_content}>
                    <div className={s.cards}>
                        <div className={cl(s.cards_card_st, s.card)}>
                            <Image src={cardSt} width={360} height={530} alt='img'/>
                            <p className={cl(s.st_top, s.cards_price, s.right_bg)}>1 899 с </p>
                            <p className={cl(s.st_btm, s.cards_price, s.left_bg)}>899 с</p>
                        </div>
                        <div className={cl(s.cards_card_nd, s.card)}>
                            <Image src={cardNd} width={360} height={530} alt='img'/>
                            <p className={cl(s.nd_top, s.cards_price, s.left_bg)}>899 ₴</p>
                            <p className={cl(s.nd_btm, s.cards_price, s.right_bg)}>1 899 с </p>
                        </div>
                        <div className={cl(s.cards_card_rd, s.card)}>
                            <Image src={cardRd} width={360} height={530} alt='img'/>
                            <p className={cl(s.rd_top, s.cards_price, s.right_bg)}>1 899 с </p>
                            <p className={cl(s.rd_btm, s.cards_price, s.left_bg)}>899 с</p>
                        </div>
                        <div className={cl(s.cards_card_th, s.card)}>
                            <Image src={cardTh} width={360} height={530} alt='img'/>
                            <p className={cl(s.th_btm, s.cards_price, s.right_bg)} width={105}>1 899 с </p>
                            <p className={cl(s.th_top, s.cards_price, s.left_bg)}>899 с</p>
                        </div>
                    </div>
                    <MyButton className={s.suits_btn}>
                        <Link href='/suits'><b>Смотреть все</b></Link>
                    </MyButton>
                </div>
            </div>

        </section>
    );
};

export default Suits;