const express=require('express')
const {connection}=require("./config/db")
const {userRouter}=require("./routes/User.route")
const {authenticate}=require("./middlewares/authenticate.middleware")
const cors=require("cors");
const app=express()

app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Bug Tracker page")
})

app.use("/",userRouter)
app.use(authenticate)


app.listen(3500,async()=>{
    try{
await connection;
console.log("port is running on 3500")
    }
    catch(err){
        console.log("error while connectiog to mongo")
        console.log(err)
    }
    
})