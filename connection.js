import mongoose from "mongoose";
const connection = (url)=>{
    mongoose.connect(url).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}

export default connection;