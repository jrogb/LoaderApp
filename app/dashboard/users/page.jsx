import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/users/users.module.css';
import Link from 'next/link';
import {MdAddCircleOutline} from 'react-icons/md';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

const UsersPage = ({placeholder}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user"/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}><MdAddCircleOutline width={40} height={40}/> Add User</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableHeader}>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/noavatar.png" alt="User" width={40} height={40} className={styles.userImage}/>
                            Johan Grobbelaar
                        </div>
                    </td>
                    <td>johan@email.com</td>
                    <td>2023-10-01</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td>
                        <div className={styles.buttons}>
                            <Link href="">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <Link href="">
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </Link>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default UsersPage;