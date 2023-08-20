let express= require("express");
const router = require("./Routes/Admin/signup.admin.routes");
require("dotenv").config();


let app = express();

app.use(express.json())

app.use('/api/admin',router)

app.use('*', (req,res,next)=>{
       res.status(400).json("Page Not Found")
})



app.listen(process.env.PORT, ()=>{
    console.log(`Server running sucessfully${process.env.PORT}`);
} )