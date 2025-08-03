import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/noavatar.png"alt="profile picture" fill/>
                </div>
                Iphone 15
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="Price" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="12" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="Blue" />
                    <label>Size</label>
                    <textarea type="text" name="size" placeholder="16 inch" />
                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" rows="10" placeholder="Description" />
                    <button>Update</button>
                </form>
                    

            </div>
        </div>
    );
};

export default SingleProductPage;