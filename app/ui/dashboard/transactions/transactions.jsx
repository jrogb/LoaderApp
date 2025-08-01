import Image from 'next/image';
import styles from './transactions.module.css';

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.header}></th>
                        <th className={styles.header}>Name</th>
                        <th className={styles.header}>Status</th>
                        <th className={styles.header}>Date</th>
                        <th className={styles.header}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.row}>
                            <td className={styles.user}>
                                <Image className={styles.userImage} src="/noavatar.png" alt="user profile picture" width={40} height={40}/>
                            </td>
                            <td className={styles.cell}>Johan</td>
                        <td className={styles.cell}>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td className={styles.cell}>14.02.2025</td>
                        <td className={styles.cell}>$1.50</td>
                    </tr>
                    <tr className={styles.row}>
                            <td className={styles.user}>
                                <Image className={styles.userImage} src="/noavatar.png" alt="user profile picture" width={40} height={40}/>
                            </td>
                            <td className={styles.cell}>Johan</td>
                        <td className={styles.cell}>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td className={styles.cell}>14.02.2025</td>
                        <td className={styles.cell}>$1.50</td>
                    </tr>
                    <tr className={styles.row}>
                            <td className={styles.user}>
                                <Image className={styles.userImage} src="/noavatar.png" alt="user profile picture" width={40} height={40}/>
                            </td>
                            <td className={styles.cell}>Johan</td>
                        <td className={styles.cell}>
                            <span className={`${styles.status} ${styles.cancelled}`}>Canceled</span>
                        </td>
                        <td className={styles.cell}>14.02.2025</td>
                        <td className={styles.cell}>$1.50</td>
                    </tr>
                    <tr className={styles.row}>
                            <td className={styles.user}>
                                <Image className={styles.userImage} src="/noavatar.png" alt="user profile picture" width={40} height={40}/>
                            </td>
                            <td className={styles.cell}>Johan</td>
                        <td className={styles.cell}>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td className={styles.cell}>14.02.2025</td>
                        <td className={styles.cell}>$1.50</td>
                    </tr>
                    <tr className={styles.row}>
                            <td className={styles.user}>
                                <Image className={styles.userImage} src="/noavatar.png" alt="user profile picture" width={40} height={40}/>
                            </td>
                            <td className={styles.cell}>Johan</td>
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