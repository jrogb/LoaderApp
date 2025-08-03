import { User } from "./models";
import { Product } from "./models";
import { connectToDatabase } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    
    const ITEM_PER_PAGE = 4;
        // Case-insensitive search
    try {
        await connectToDatabase();
        const count = await User.countDocuments({ username: { $regex: regex } });
        const users = await User.find({username:{ $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1)); // If this fails, logs should reveal why
        return {count, users};
    } catch (err) {
        console.log("Error fetching users:", err);
        throw new Error("Failed to fetch users");
    }
};

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
    
    const ITEM_PER_PAGE = 4;
        // Case-insensitive search
    try {
        await connectToDatabase();
        const count = await Product.countDocuments({ title: { $regex: regex } });
        const products = await Product.find({title:{ $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1)); // If this fails, logs should reveal why
        return {count, products};
    } catch (err) {
        console.log("Error fetching products:", err);
        throw new Error("Failed to fetch products");
    }
};