import { MdPlayCircleFilled } from 'react-icons/md';
import styles from './rightbar.module.css';
import Image from 'next/image';

const Rightbar =() => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="picture of an astronaut" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥Available now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos beatae eligendi recusandae tempora ex consequuntur esse dolor asperiores ad. Quos eveniet doloremque hic eius eos aut fugiat, minus dignissimos.</p>
                    <button className={styles.button}><MdPlayCircleFilled/> Watch now</button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥Available now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos beatae eligendi recusandae tempora ex consequuntur esse dolor asperiores ad. Quos eveniet doloremque hic eius eos aut fugiat, minus dignissimos.</p>
                    <button className={styles.button}><MdPlayCircleFilled/>Read More</button>
                </div>
                
            </div>
        </div>
    );
};

export default Rightbar;