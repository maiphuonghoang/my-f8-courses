const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mp_education_dev');
        console.log("connect success");
    }catch(error){
        console.log("connect failed");
    }
}
 
module.exports = {connect};

// https://github.com/Automattic/mongoose