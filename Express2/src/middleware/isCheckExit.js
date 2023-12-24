const path =require("node:path")
const fs = require("node:fs")


const isCheckExits = (req,res,next)=>{
//requirement :kiem tra user co ton tai trong user json hay khong 
//lay id va email
const idUser = req.query.id 
const emailUser = req.query.emailUser
// doc data
const pathUser = req.path.join(__dirname,"../../data/users.json")
const dataUserJson = fs.readFileSync(pathUser,"utf-8")
const listUser = JSON.parse(dataUserJson)
//check exits
const user = listUser.find((user)=>user._id === idUser && user.email === emailUser)
if(user){
    next()
}else{
    res.status(401).send("khong tim thay user")
}
}
module.exports = isCheckExits