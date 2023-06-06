import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 'mongodb+srv://jatin1582be20:HBWK2rc3pK4R9KM8@cluster0.lats2j9.mongodb.net/?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;