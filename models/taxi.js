const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});
 
// create taxi Schema & model
const TaxiSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    serialNumber: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema

});

const Taxi = mongoose.model('taxi', TaxiSchema);

module.exports = Taxi;