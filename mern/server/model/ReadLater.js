const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReadLaterSchema = new Schema( {
    data:{type:String},
    link: {type:String}
});

const Reads = mongoose.model('Read', ReadLaterSchema)

module.exports = Reads