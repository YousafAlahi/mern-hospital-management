

// step ==> 1 ;;; npm init -y ;;

// step ==> 2 ;;; install required package and library like express mongodb mongoose cors cookie-parser jsonwebtokan dotenv nodemon ;;;

// step ==> 3 ;;; package.json file and edit it like "start" : "node index.js",
    "start-dev" : "nodemon index.js" and "type": "module",

// step ==> 4 ;;; create a index.js file ;;

// <<======== inside index.js file ======>>>>>

// step ==> 1

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// step ==> 1  EEnnDD  ;;


// step ==> 2 ;;
// we create a.env file 
// inside .env file PORT = 5000;
then we a file which name is .env;
and inside the .env file we add PORT = 5000;

// step ==> 3 ;;
const app = express();
const port = process.env.PORT || 8000;

const corsOPtions = {
    origin : true,
};

app.get('/', (req, res) => {
    res.send("Api is working")
});

app.listen(port, () => {
 
    console.log(`Server is running on port ` + port)
});
// step ==> 3  EEnnDD  ;;


// step ==> 5 ;;

// middleware ;;;
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOPtions));

// step ==> 5  EEnnDD  ;;

// step ==> 6 ;;

// Database connection ;;;

// Note ===>>> Google open kr ky MongoDB Atlas pr ja kr project create krna ho ga project link and password
 copy kr ky .env file mein link ko paste krna ha  example ( MONGODB_URL = "copy link" ) kr ky password add karna ha phr index.js file given setup karna ha then project run karna ha 

mongoose.set('strictQuery', false);
const connectDB = async() => {
   try {
    await mongoose.connect(process.env.MONGODB_URL, {
         useNewUrlParser : true,
         useUnifiedTopology : true,
     });
     console.log("mongodb is connected");
   } catch (error) {
        console.log("mongodb  connection failed");
   }
}
   connectDB(); ====>>>  app.listen function mein apple karna ha 
// step ==> 6  EEnnDD  ;;



// step ==> 7 ;;
we create two folder which names are Controllers and Routes ...
<!-- inside Controllers folder we create a file which name is authController.js; -->
inside authControllers.js file ====>> Is file ke ander authentication se related functions rakhe ..
    1 ==>> register() ---->> Naya user register karta hai. 
    2 ==>> login() ---->> Existing user ko login karwata hai
Ab un functions ko export kr deya ...

<!-- inside Routes folder we create a file which name is authRoute.js (Routes); -->
Is file mein hum ny authControllers.js se sirf ye function import kiya register() and  login() 
phir un function ky routes banaye   ====>>> Example 

router.post('/register', register);
router.post('/login', login);

then router export kr ky index.js mein import kr ly gy 

// step ==> 7  EEnnDD  ;;




// step ==> 8  UserController ;;
Ab hum Controllers folder ky under userController.js ky file bana gy aur os mein getSingleUser, getAllUser, updateUser and deleteUser names ky functions bana kr export kary gy .....
Then Routes Folder ky under userRoute.js ky file bany gy aur osy mein getSingleUser, getAllUser, updateUser and deleteUser names ky functions bana kr import kary gy aur asy index.js mein pass kary gy.
// step ==> 8  EEnnDD  ;;









// step ==> 4 ;;
// step ==> 4  EEnnDD  ;;

