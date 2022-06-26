const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: ObjectId,
        ref: "author1"
    },
    tags: {
        type: [String],
    },
    category: {
        type: [String],
        required: true
    },
    subcategory: {
        type: [String],
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date, defualt:null
    }

}, { timestamps: true });


module.exports = mongoose.model('blog', blogSchema) 