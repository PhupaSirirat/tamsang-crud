const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require('dotenv')
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const JWT_SECRET = "1fn901fn904n090n0v3n92019)!90()&"

dotenv.config()
mongoose.set('strictQuery', true)

const app = express()
app.use(express.json())
app.use(cors())

const mongoUrl = "mongodb+srv://admin:admin123@tamsung-crud.hyzcl82.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser : true,
})
.then(() => {
    console.log("Connected to database");
})
.catch((e) => console.log(e))

require("./userDetails")
require("./historyDetail")
const User = mongoose.model("UserInfo")
const History = mongoose.model("History")


app.post("/register",async(req,res) => {
    const {fname,lname,email,password} = req.body
    const encryptedPassword = await bcrypt.hash(password,10)
    try {
        const oldUser = await User.findOne({email})

        if (oldUser){
            return res.send({error : "User Exists"})
        }
        await User.create({
            fname,
            lname,
            email,
            password : encryptedPassword
        })

        res.send({status : "ok"})
    } catch (error){
        res.send({status : "error"})
    }
})

app.post("/login",async(req,res) =>{
    const {email,password} = req.body

    const user = await User.findOne({email})
    if (!user){
        return res.json({error : "User Not Found"})
    }
    if (await bcrypt.compare(password,user.password)) {
        const token = jwt.sign({email:user.email},JWT_SECRET)
        if (res.status(201)){
            return res.json({status : "ok",data:token})
        } else {
            return res.json({error : "error"})
        }
    }
    res.json({status : "error",error : "Invalid Password"})
})

app.post("/userdata",async(req,res)=>{
    const {token} = req.body
    try{
        const user = jwt.verify(token,JWT_SECRET)
        const useremail = user.email
        User.findOne({email:useremail}).then((data)=>{
            res.send({status:"ok",data:data})
        }).catch((error)=>{
            res.send({status:"error",data:"error"})
        })
    } catch(error){

    }
})

app.post("/history",async(req,res) => {
    const {name,email,phonenum,orderTime,total,item} = req.body
    try {
        
        await History.create({
            name,
            email,
            phonenum,
            orderTime,
            total : total+30+" ฿",
            item,
        })

        res.send({status : "ok"})
    } catch (error){
        res.send({status : "error"})
    }
})

app.listen(3333, () => {
    console.log("Server Started");
})