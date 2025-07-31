import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout
} from "react-icons/md";

const menuItems = [
    {
        title:"Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Sales",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Purchases",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Inventory",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },

        ],
    },
    {
        title:"Analytics",
        list: [
            {
                title: "Revenue",
                path: "/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/reports",
                icon: <MdAnalytics />
            },
            {
                title: "Teams",
                path: "/teams",
                icon: <MdPeople />
            }
        ],
    },
    {
        title:"User",
        list: [
            {
                title: "Settings",
                path: "/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/help",
                icon: <MdHelpCenter />
            },
        ],
    },
];

const Sidebar =() => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} alt="a blank user logo" src="/noavatar.png" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
           <ul className={styles.list}>
            {menuItems.map((cat) => (
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map((item) => (
                        <MenuLink item={item} key={item.title} />
                    ))}
                </li>
            ))}
           </ul>
        </div>
    );
};

export default Sidebar;