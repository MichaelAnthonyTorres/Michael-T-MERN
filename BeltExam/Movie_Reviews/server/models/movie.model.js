const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, "Show me the movie Title"]
    },

    name:{
        type:String,
        required: [true, "What we've got here is a failure to communicate"]
    },

    rating:{
        type:Number,
        required: [true, "Elementary my dear Watson. Just pick a number"],
        enum: [0,1,2,3,4,5,6,7,8,9,10]
    },

    review:{
        type:String,
        required: [true, "You can't handle the truth. Leave a review"],
        minlength: [10, "You're gonna need a bigger review"]
    }
})

module.exports = mongoose.model('Movie', MovieSchema)