
// Step ==> 1
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// EEnnDD ==> 1
// Step ==> 2 mein env file create kary gy aur PORT = 5000; add kary gy ;;


const app = express(); 
const port = process.env.PORT || 6000; 

const corsOptions = {
  origin : true
}; 


// Database Connection ;;;

mongoose.set('strictQuery', false);

const connectionDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewParser : true,
      useUnifiedTopology: true
    });
    console.log("MongoDB is Connection SucessFully")
  } catch (error) {
        console.log("MongoDB is Connected failed", error)
  }
};


app.get('/', (req, res) => {
  res.send("Api is working")
}); 

// middleware ;;;;

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());



app.listen(port, () => {
  console.log(`Server are running on port ${port}` + port)
}); 


