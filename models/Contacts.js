var mongoose =require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var ContactSchema = new mongoose.Schema({
	email: String,
	first_name: String,
	last_name: String,
	hobbies: [{
	 type: mongoose.Schema.Types.ObjectId,
	 ref: 'Hobby'
 }]

});

ContactSchema.plugin(deepPopulate);

mongoose.model('Contact', ContactSchema);
