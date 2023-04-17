import mongoose from 'mongoose';

const connectDB = (url) => {
  // function, accepts url as a param
  mongoose
    .connect(url) // connect to db
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
};

export default connectDB;
