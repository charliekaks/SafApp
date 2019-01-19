const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    details : {
        type: String,
        required : true
    },
    price : {
        type: String,
        required : true
    },
    cover : {
        type: String,
        required: false
    },
    user: {
        type: String
    },
});

mongoose.model("books", BooksSchema);