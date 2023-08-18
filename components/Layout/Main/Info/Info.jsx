import Image from 'next/image';
import s from './Info.module.scss';
import topSt from '../../../../assets/Images/info-cat.png';
import topNd from '../../../../assets/Images/info-sms.png';
import topRd from '../../../../assets/Images/info-heart.png';
import insta from '../../../../assets/Images/info-insta.png';
import instaNd from '../../../../assets/Images/insta-nd.png';
import instaRd from '../../../../assets/Images/info-hoodie.png';
import instaTh from '../../../../assets/Images/info-rd.png';
import instaFTh from '../../../../assets/Images/info-fth.png';

const Info = () => {
    return (
        <section className={s.info}>
            <div className={s.container}>
                <div className={s.info_content}>
                    <div className={s.info_content_top}>
                        <div className={s.info_content_st}>
                            <Image src={topSt} width={81} height={98} alt='cat' />
                            <div>
                                <p className={s.info_content_st_title}><b>Отправка день в день</b></p>
                                <p>При заказе до 18:00</p>
                            </div>
                        </div>
                        <div className={s.info_content_st}>
                            <Image src={topNd} width={81} height={98} alt='cat' />
                            <div >
                               <p className={s.info_content_st_title}><b>Легкий возврат/обмен</b></p> 
                                <p>В течении 14 дней</p>
                            </div>
                        </div>
                        <div className={s.info_content_st}>
                            <Image src={topRd} width={81} height={98} alt='cat' />
                            <div >
                               <p className={s.info_content_st_title}> <b>Сделано в Кыргызстане</b></p>
                                <p>Прям в Бишкеке</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.info_content_btm}>
                        <div className={s.info_content_insta}>
                            <h1 className={s.info_content_insta_title}>Instagram</h1>
                            <p>Мы в экстазе, когда ты нас отмечаешь. <br/> Отмечай плз чаще</p>
                            <div className={s.info_content_insta_img}>
                                <Image src={insta} width={205} height={205} alt='img' />
                                <Image src={instaNd} width={168} height={168} alt='img' />
                            </div>
                        </div>
                        <div className={s.info_content_img}>
                            <Image src={instaRd} width={370} height={370} alt='img' />
                        </div>
                        <div className={s.info_content_end}>
                            <div className={s.info_content_end_img}>
                            <Image src={instaTh} width={168} height={168} alt='img' />
                            <Image src={instaFTh} width={205} height={205} alt='img' />
                            </div>
                            <p className={s.info_content_end_title}><b>#boorivagirls </b></p>
                            <p style={{marginLeft: '109px', fontSize: '16px', fontWeight: '400'}}>Ставь тэг чтобы быть в нашей тусовке.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;