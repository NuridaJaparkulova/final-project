import Image from 'next/image';
import collBg from '../../../../assets/Images/collection-bg.png';
import s from './Collection.module.scss'

const Collection = () => {
    return (
        <section className={s.collection}>
            <div className='container'>
                <div className={s.collection_img}>
                    <Image className={s.collection_img_img} src={collBg} alt='img' width={1440} height={512} />
                </div>
            </div>

        </section>
    );
};

export default Collection;