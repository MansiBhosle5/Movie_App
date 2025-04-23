const mongoose = require("mongoose");



const MovieSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: true

        },
        description:{
            type : String,
            required: true

        },
        genre:{
            type : String,
            required: true

        },
        image:{
            type:String,
            required : true
        },  
    

    }
)

const MovieModel = mongoose.model("MovieModel", MovieSchema); // para (modelname,schemaname)
module.exports = MovieModel; //Export the category model

