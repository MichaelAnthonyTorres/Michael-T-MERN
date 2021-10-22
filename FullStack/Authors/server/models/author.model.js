const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Must have a name"],
        minlength:[3, "Must have atleast 3 characters"]
    }
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);