let express =require('express');
const { adminsignup } = require('../../Controllers/Admin/admin.singup.controller');
require('../../Controllers/Admin/admin.singup.controller')

let router = express.Router();

router.post('/adminsignup', adminsignup )

module.exports=router