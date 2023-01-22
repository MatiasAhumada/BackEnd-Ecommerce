import mongoose from "mongoose";

const url ='mongodb://127.0.0.1:27017/tecnoMas'
mongoose.connect(url);

const connection = mongoose.connection

connection.once('open', ()=>{
    console.log('BD conectada')
})

// const connectDB = async ()=>{
//   try{
//     await mongoose.connect(url)
//     console.log('BD conectada')

//   }catch(error){
//     console.log(error)
//   }
// }
// connectDB()