const express = require("express");
const mongoose = require("mongoose");
const movieroutes = require("./routes/movieroutes");
const cors = require("cors");
const app = express();


mongoose.connect("mongodb://127.0.0.1:27017/Movie-List", {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
}).then(()=>{
    console.log("connected to mongodb")
}).catch((err) => {
    console.log(err)
})

const corsOptions ={
    origin : "http://localhost:3000",
    method :'GET,POST,PUT,DELETE',
    allowedHeaders: ['Content-Type','Authorization']
};

app.use(cors())
app.use(express.json(corsOptions));
app.use("/movie",movieroutes);

app.get("/", (req, res) => {
    res.send("Hello, Welcome to India");
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);

});
