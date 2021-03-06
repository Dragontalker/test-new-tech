const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    keywords: Array,
    published: Boolean
});