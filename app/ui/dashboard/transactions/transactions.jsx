import Image from 'next/image';
import styles from './transactions.module.css';

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td className={styles.header}>Name</td>
                        <td className={styles.header}>Status</td>
                        <td className={styles.header}>Date</td>
                        <td className={styles.header}>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.row}>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="User" width={40} height={40} className={styles.userImage}/>
                                Johan Grobbelaar
                            </div>
                        </td>
                        <td className={styles.cell}>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td className={styles.cell}>14.02.2025</td>
                        <td className={styles.cell}>$1.50</td>
                    </tr>
                    <tr className={styles.row}>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="User" width={40} height={40} className={styles.userImage}/>
                                Johan Grobbelaar
                            </div>
                        </td>
                        <td className={styles.cell}>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td className={styles.cell}>14.02.2025</td>
                        <td className={styles.cell}>$1.50</td>
                    </tr>
                    <tr className={styles.row}>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="User" width={40} height={40} className={styles.userImage}/>
                                Johan Grobbelaar
                            </div>
                        </td>
                        <td className={styles.cell}>
                            <span className={`${styles.status} ${styles.cancelled}`}>Canceled</span>
                        </td>
                        <td className={styles.cell}>14.02.2025</td>
                        <td className={styles.cell}>$1.50</td>
                    </tr>
                    <tr className={styles.row}>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="User" width={40} height={40} className={styles.userImage}/>
                                Johan Grobbelaar
                            </div>
                        </td>
                        <td className={styles.cell}>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td className={styles.cell}>14.02.2025</td>
                        <td className={styles.cell}>$1.50</td>
                    </tr>
                    <tr className={styles.row}>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="User" width={40} height={40} className={styles.userImage}/>
                                Johan Grobbelaar
                            </div>
                        </td>
                        <td className={styles.cell}>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td className={styles.cell}>14.02.2025</td>
                        <td className={styles.cell}>$1.50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;