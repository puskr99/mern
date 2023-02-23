const mongoose = require("mongoose");

const DB = 'mongodb+srv://puskr:mongoPass@cluster0.vetd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log('MongoDB connected!!');
    } 
    catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
connectDB();