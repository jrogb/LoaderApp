import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
    if (isConnected) return;

    try {
        const db = await mongoose.connect("mongodb://admin:homelabAdmin%40johan@127.0.0.1:27017/loader?authSource=admin");
        isConnected = db.connections[0].readyState;
    } catch (error) {
        throw error;
    }
};
