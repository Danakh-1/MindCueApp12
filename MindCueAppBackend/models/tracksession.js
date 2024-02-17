// //define the fields or schema of usres
// const { Timestamp } = require("mongodb");
// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
// // Create Schema
// //we need a reference back to the users
// const TrackSchema = new Schema({
//   user: {type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'user'},
//   settings:{type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'settings'},
//   timeStart: {
//         type: Date,
//         required: true,
//     },
//   title:{type: String},
//   description:{type: String},
//   timeReach:{type: Boolean},
//   UserANS1:{type: Boolean},
//   warningStatus:{type: Boolean},
//   UserANS2:{type: Boolean},
//   warningStatusHW:{type: Boolean},
//   UserANS3:{type: Boolean},
//  // dataRecorded:{type: timestamp},
// },
// {
//   //timestamp: true
// }
// );


// //name of the collectiom and export the name of the schema
// module.exports = mongoose.model("Track", TrackSchema);

//define the fields or schema of usres
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Create Schema
//we need a reference back to the users
const TrackSchema = new Schema({
	user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
	settings: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: 'settings',
	},
	urls: [
		{
			type: String,
		},
	],
	timeStart: { type: Date, required: true }, // Use Date type instead of Timestamp
	timeEnd: { type: Date, required: true }, // Use Date type instead of Timestamp
	title: { type: String },
	description: { type: String },
	timeReach: { type: Boolean },
	UserANS1: { type: Boolean },
	warningStatus: { type: Boolean },
	UserANS2: { type: Boolean },
	warningStatusHW: { type: Boolean },
	UserANS3: { type: Boolean },
	dataRecorded: { type: Date, default: Date.now },
	file: { type: String },
});

//name of the collectiom and export the name of the schema
module.exports = mongoose.model('tracks', TrackSchema);
