let {connect}=require("mongoose");
require("dotenv").config();


connect(process.env.URL).
then(()=>{
  console.log("MongoDB is running sucessfully");
}).catch((err)=>{
  throw err
})