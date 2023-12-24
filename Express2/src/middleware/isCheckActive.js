const path = require("node:path");
const fs = require("node:fs");

 const isCheckActive =(req,res,next)=>{
//  test 1 cai fix cung
// doc data
const pathUser = path.join(__dirname,"../../data/users.json")
const dataUser =fs.readFileSync(pathUser,"utf-8")
const listUser = JSON.parse(dataUser)
const dataTest = listUser.find((user)=>user._id === "5c8a1dfa2f8fb814b56fa181" )
// gan data vao request
req.dataTest= dataTest

// check user active
if (req.dataTest.active) {
    next()
}else{
    res.status(304).json({
        massage:"bạn chưa đăng nhập"
    })
}
}

module.exports = isCheckActive