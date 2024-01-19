import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    // });
    const conn = mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.on('connected', () =>
      console.log('connected'.green.bold)
    );
    // mongoose.connection.on(
    //   'disconnected',
    //   () => console.log('disconnected').red.bold
    // );
    console.log(
      `MONGODB CONNECTED: ${
        mongoose.createConnection(process.env.MONGO_URI).host
      }`.cyan.underline
    );
  } catch (error) {
    console.log(`Error ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
