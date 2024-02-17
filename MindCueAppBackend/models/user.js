//define the fields or schema of usres
const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
userType: [
{
type: String,
possibleValues: ['Patient', 'Doctor', 'Guest'],
defult: 'Patient',
},
],
validated: { type: Boolean },
licenceID: { type: Boolean },
validateEmailToken: { type: String },
EMGName: { type: String },
EMGphone: { type: String },
EMGRelationship: { type: String },
clincNo: { type: Number },
clincAdd: { type: String },
registrationDate: { type: Date, default: Date.now },
resetpassword: { type: String },
});

//userSchema.plugin(uniqueValidator);

//name of the collectiom and export the name of the schema
module.exports = mongoose.model('users', UserSchema);