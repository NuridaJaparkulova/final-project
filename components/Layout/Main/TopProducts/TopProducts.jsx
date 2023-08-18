import Image from 'next/image';
import s from './TopProducts.module.scss';
import bomber from '../../../../assets/Images/card-rd.jpg';
import dressTShirt from '../../../../assets/Images/card-th.jpg';
import imgNd from '../../../../assets/Images/topProd-nd.png';
import dress from '../../../../assets/Images/card-nd.jpg';
import MyButton from '../../../../UI/Button/MyButton';
import Link from 'next/link';

const TopProducts = () => {
    return (
        <section className={s.top_products}>
            <div className={s.container}>
                <div className={s.top_products_content}>
                    <div className={s.top_products_title}>
                        <p>топовые товары</p>
                        <p>топовые товары</p>
                        <p>топовые товары</p>
                        <p>топовые товары</p>
                    </div>
                    <div className={s.top_products_cards}>
                        <div className={s.top_products_card_st}>
                            <div className={s.card_top}>
                                <Image src={bomber} width={254} height={238} alt='img' />
                                <hr />
                                <div className="card_title">
                                    <p className="card_desc">Бомбер Gone Crazy хаки</p>
                                    <p className="card_price">2 499 ₴</p>
                                </div>
                            </div>
                            <div className={s.card_bottom}>
                                <Image src={dressTShirt} width={254} height={238} alt='img' />
                                <hr />
                                <div className="card_title">
                                    <p className="card_desc">Бомбер Gone Crazy хаки</p>
                                    <p className="card_price">2 499 ₴</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.top_products_card_nd}>
                            <Image src={imgNd} width={466} height={600} alt='img' />
                        </div>
                        <div className={s.top_products_card_rd}>
                            <Image src={dress} width={360} height={507} alt='img' />
                            <div className={s.card_title}>
                                <p className={s.card_desc}>Платье прозрачное в цветочек черное</p>
                                <p className={s.card_price}>1 299 ₴</p>
                            </div>
                        </div>
                    </div>
                    <MyButton className={s.cards_btm_title}>
                        <Link href='/novelties'><b>Смотреть все</b></Link>
                    </MyButton>
                </div>
            </div>
        </section>
    );
};

export default TopProducts;