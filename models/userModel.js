const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    username : {
        type: String,
        required: [true, 'Please provide a username'],
    },
    email : {
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, 'Email already exists']
    },
    password : {
        type: String,
        required: [true, 'Please provide an email'],
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);