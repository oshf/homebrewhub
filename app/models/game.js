// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var gameSchema = mongoose.Schema({
    data             : {
        title        : String,
        developer    : String,
        repository   : String,
        tags         : Array,
        files        : [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
        permalink    : String,
        screenshots  : Array
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Game', gameSchema);