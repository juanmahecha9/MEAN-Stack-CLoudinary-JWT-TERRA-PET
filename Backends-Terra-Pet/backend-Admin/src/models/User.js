const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String
}, {
    timestamps: true
});

module.exports = model('User', userSchema, 'users');