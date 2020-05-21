const mongoose = require('mongoose');

const URI = "mongodb+srv://CaptainCRAZY:planetjupiter@aupcaf-master-gciif.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async()=>{
    await mongoose.connect(URI,{ 
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Database Connected..!');
};

module.exports = connectDB;