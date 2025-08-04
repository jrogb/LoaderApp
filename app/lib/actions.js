import { connectToDatabase } from "./utils";
import { User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
    "use server";
    const { username, email, password, phone, address, isAdmin, isActive, img } = Object.fromEntries(formData);

    try{

        connectToDatabase();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin: isAdmin ,
            isActive: isActive,
            img,
        });

        await newUser.save();

    } catch (error) {
        console.error("Error adding user:", error);
        throw new Error("Failed to add user");
    };
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};