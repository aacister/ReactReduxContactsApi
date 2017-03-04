var mongoose =require('mongoose');

var ContactSchema = new mongoose.Schema({
	email: String,
	first_name: String,
	last_name: String
});


mongoose.model('Contact', ContactSchema);
