const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const languageSchema = new Schema({
    language: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    }
});

const languageModel = mongoose.model('Language', languageSchema);

module.exports = languageModel;