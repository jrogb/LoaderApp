"use client";
import styles from './pagination.module.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Pagination = ({count}) => {

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const page = searchParams.get("page") || 1;
    const params = new URLSearchParams(searchParams);
    const ITEM_PER_PAGE = 2;

    const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0; // Check if there is a previous page
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count; // This should be determined based on total items and ITEM_PER

    const handleChangePage = (type)=> {
        console.log("Changing page:", type, "Current page:", page);
        type === "prev" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1);
        replace(`${pathname}?${params}`);
    }

    return (
        <div className={styles.container}>
            <button disabled={!hasPrev} className={styles.button} onClick={()=>handleChangePage("prev")}>Prev</button>
            <button disabled={!hasNext} className={styles.button} onClick={()=>handleChangePage("next")}>Next</button>
        </div>
    );
};

export default Pagination;