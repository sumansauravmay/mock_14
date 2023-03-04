const mongoose=require("mongoose")
mongoose.set('strictQuery', false)

const connection=mongoose.connect("mongodb+srv://suman:suman@cluster0.3strbps.mongodb.net/bugtrackeer?retryWrites=true&w=majority")

module.exports={connection};


