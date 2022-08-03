import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import productRoute from './routes/product'

const app = express()

//middeware
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.use("/api",productRoute)

//connect db
const urlMong = "mongodb+srv://dung:dung27082002@cluster0.qfdt7gw.mongodb.net/api_ass_next?retryWrites=true&w=majority"

try {
    mongoose.connect(
        urlMong,
        //@ts-ignore
        { useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log("Đã kết nối Mongoose")
    )
} catch (e) {
    console.log("không thể kết nối");
}

const dbConnection = mongoose.connection
dbConnection.on("error", (err)=> console.log(`Kết nối thất bại ${err}`))
dbConnection.once("open", ()=> console.log('Kết nối thành công đến DB'))


app.listen(8000, ()=> {
    console.log('Run server success');
})