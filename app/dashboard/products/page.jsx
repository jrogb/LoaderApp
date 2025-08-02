import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/products/products.module.css';
import Link from 'next/link';
import {MdAddCircleOutline} from 'react-icons/md';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

const Products = ({placeholder}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a Product"/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}><MdAddCircleOutline width={40} height={40}/> Add User</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableHeader}>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <div className={styles.product}>
                            <Image src="/noproduct.jpg" alt="Image of a product" width={40} height={40} className={styles.productImage}/>
                            IPhone 15 Pro
                        </div>
                    </td>
                    <td>its a phone</td>
                    <td>$599.99</td>
                    <td>2023-10-01</td>
                    <td>12</td>
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

export default Products;