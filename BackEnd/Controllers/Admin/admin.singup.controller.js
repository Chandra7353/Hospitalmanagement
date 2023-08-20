let Admin =require("../../Models/Admin/signup.models.admin")
let JOI = require('joi');


//JOI validation 
let joivalidation = JOI.object({
    name:JOI.string().min(4).required().messages({
        "string.base":"name Must  be String",
        "string.min":"name should Contain Minimum 4 charactors",
        "string.empty":"name is Mandtory"
    }),
    email:JOI.string().required(),
    role:JOI.string().required(),
    password:JOI.string().required()

})


let adminsignup = async(req,res,next)=>{

    try{

        let {name, email,role,password}=req.body;
        let {value, err}= joivalidation.validate({name, email,role,password})

        if(err){
           return res.status(400).json({error:true, message:"validation failded", data:err})
        }
        else{

            let admin= Admin.create(value)
            return res.status(200).json({error:false, message:"Doctor added sucessfully", data:admin})
        }


    }
   
    catch(err){
        next(err)
    }   

}


module.exports={
    adminsignup
}