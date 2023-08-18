import s from './Hero.module.scss';
import tShirts from '../../../../assets/Images/hero-t-shirts.jpg';
import up from '../../../../assets/Images/hero-up.jpg';
import bottom from '../../../../assets/Images/hero-bottom.png';
import dresses from '../../../../assets/Images/hero-dresses.jpg';
import costumes from '../../../../assets/Images/hero-costumes.jpg';
import hoodies from '../../../../assets/Images/hero-hoodies.jpg';
import Image from 'next/image';
import MyButton from '../../../../UI/Button/MyButton';
import cl from 'classnames';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className="container">
                <div className={s.hero_content}>
                    <div className={s.hero_content_left}>
                        <div className={s.img_st}>
                            <Image src={tShirts} width={563} height={345} alt='img'/>
                            <MyButton>
                            <Link href='/top'><p className={cl(s.tShirts, s.position)}><b>Футболки </b></p></Link>  
                            </MyButton>
                        </div>
                        <div className={s.img_btm}>
                            <div className={s.img_nd}>
                                <div style={{ position: 'relative' }}>
                                    <Image src={bottom} width={274} height={296} alt='img' />
                                    <MyButton>
                                    <Link href='/bottom'><p className={cl(s.btm, s.position)}><b>Низ</b></p></Link>  
                                    </MyButton>
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <Image src={up} width={274} height={296} alt='img'/>
                                    <MyButton>
                                    <Link href='/top'><p className={cl(s.up, s.position)} > <b>Верх</b></p></Link>  
                                    </MyButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.hero_content_right}>
                        <div className={s.img_nd}>
                            <div style={{ position: 'relative' }}>
                                <Image src={dresses} width={274} height={296} alt='img'/>
                                <MyButton>
                                  <Link href='/dresses'><p className={cl(s.dresses, s.position)}> <b>Платья</b></p></Link>  
                                </MyButton>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <Image src={costumes} width={274} height={296} alt='img'/>
                                <MyButton>
                                <Link href='/suits'><p className={cl(s.costumes, s.position)}> <b>Костюмы</b></p></Link>  
                                </MyButton>
                            </div>
                        </div>
                        <div className={s.img_st}>
                            <Image src={hoodies} width={563} height={345} alt='img'/>
                            <MyButton>
                            <Link href='/top'> <p className={cl(s.hoodies, s.position)}> <b>Худи</b></p></Link>  
                            </MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;