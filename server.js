const express = require("express")
const app = express();
require("dotenv").config()
const mongoose = require ("mongoose")
const cors = require("cors");
app.use(express.Router())
app.use(express.json());
const { error } = require("console");
const e = require("express");
mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7",{ useNewUrlParser: true, useUnifiedTopology: true})
console.log("Connection succsefull");
// async function checkDB(error)
// {
// let result = await if (error)
//     {
//      
//    console.log("Error connecting DB");
//     }
//     else
//     {
//         console.log("connection successfull");
//     }
// }

// var corsOptions = {
//     origin: "http://localhost:8081"
//   };

  // app.use(cors(corsOptions));
 

//   app.use(
//     cookieSession({
//       name: "User-session",
//       secret: "COOKIE_SECRET", // should use as secret environment variable
//       httpOnly: true
//     })
//   );

//  app.get("/", (req, res) => {
//     res.json({ message: "Welcome to bezkoder application." });
//   });
  
const router =require("./routes/route");
app.use("/auth",router)
const errorhandler = require("./utils/error_handler")
app.use("*", (error,req,res,next)=>
{
errorhandler(error,res)
})


app.listen("4000", ()=>
{
    console.log("server running successfully on 4000");
})