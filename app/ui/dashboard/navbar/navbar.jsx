"use client"

import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import { MdLogout, MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

const Navbar =() => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <div className={styles.title}>{pathname.split("/").pop()}</div>
            <div className={styles.menu}>
               <div className={styles.search}>
                <MdSearch />
                <input type="text" placeholder='Search...' className={styles.input} />
               </div>
               <div className={styles.icons}>
                <MdOutlineChat size={20} />
                <MdNotifications size={20} />
                <MdPublic size={20} />
               </div>
               <button className={styles.logout}>
                    <MdLogout />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;