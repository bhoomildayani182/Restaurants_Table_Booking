const mongoose = require('mongoose');

//const mongoURI = "mongodb://localhost:27017/BookMyTable?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const mongoURI = "mongodb+srv://bhoomildayani05:Bhoomil1234@cluster0.j0zwb7i.mongodb.net/"

const connetToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connect to mongodb compass successfully");
    })
}

module.exports = connetToMongo;
