import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/noavatar.png"alt="profile picture" fill/>
                </div>
                Johan Grobbelaar
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Johan Grobbelaar" />
                    <label>Email</label>
                    <input type="text" name="email" placeholder="grobelaarjohan@icloud.com" />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="********" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="0765318120" />
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder="Springs" />
                    <label>Is Admin</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
                    

            </div>
        </div>
    );
};

export default SingleUserPage;