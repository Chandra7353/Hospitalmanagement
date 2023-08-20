let mongoose =require('mongoose');

//admin singup this are all information is required 
let adminsignup = new mongoose.Schema(
    { 
        name:{
            type:String,
            required:[true, "name is mandatory"]
        },
        email:{
            type:String,
            required:[true , "Email is mandatory"]

        },
        role:{
            type:String,
            required:[true, "Role is mandatory"]
        },
        password:{
            type:String,
            required:[true, "password is mandatory"],
            unique:true
        }

    },
    {timestamps:true}
)

module.exports = new mongoose.model('admin',adminsignup)