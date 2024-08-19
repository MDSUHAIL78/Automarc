const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    phone: {
        type: String, 
        required: true
    },
    whatsapp: {
        type: String, 
        required: true
    },
    accessories: [String],
    country: {
        type: String, 
        required: true
    },
    state: {
        type: String, 
        required: true
    }
}, { timestamps: true });

const User = mongoose.model.User || mongoose.model('user', UserSchema);
module.exports = User;