import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.on('connected', () =>
      console.log('MongoDb Connected'.cyan.underline)
    );
  } catch (error) {
    console.log(`Error ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
