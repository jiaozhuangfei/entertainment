let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieList');
let MovieSchema = new mongoose.Schema({
    name: String,
    url: String
});
exports.Movie = mongoose.model('Movie', MovieSchema);