import styles from './pagination.module.css';

const Pagination = () => {
    return (
        <div className={styles.container}>
            <button disabled className={`${styles.previous} ${styles.paginationButton}`}>Prev</button>
            <button className={`${styles.previous} ${styles.paginationButton}`}>Next</button>
        </div>
    );
};

export default Pagination;