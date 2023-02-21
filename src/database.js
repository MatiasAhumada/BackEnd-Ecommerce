import mongoose from "mongoose";

const url ='mongodb+srv://mahumada:f1qaMbagdv8Knrv8@cluster0.nkoqvy9.mongodb.net/tecnoMas'
mongoose.connect(url);

const connection = mongoose.connection

connection.once('open', ()=>{
    console.log('BD conectada')
})

