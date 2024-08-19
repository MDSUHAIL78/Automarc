const mongoose = require('mongoose');

 function connectToMongo() {
    try {  
        mongoose.connect('mongodb://localhost:27017/AutomarcDB');
    } catch (error) {
        console.log('Some error occured!')
    }
}

module.exports = connectToMongo;