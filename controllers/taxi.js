const Taxi = require('../models/taxi');


// get a list of "taxis" from the db
exports.getTaxiNearBy = async (req, res, next) => {
    Taxi.aggregate([
        {
          '$geoNear': {
                         "near": { 'type': 'Point', 
                         'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
                         "spherical": true, 
                         "distanceField": 'dist', 
                         "maxDistance": 100000
                     }
                 }
             ]).then(function(response){
        res.send(response);
    }).catch(next);

}

// add a new "taxi" to the db
exports.addTaxi = async (req, res, next) => {
    Taxi.create(req.body).then(function(response){
        res.send(response);
    }).catch(next);
}

// update a "taxi" in the db
exports.updateTaxi = async (req, res, next) => {
    Taxi.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Taxi.findOne({_id: req.params.id}).then(function(response){
            res.send(response);
        });
    }).catch(next);

}

// delete a "taxi" from the db
exports.deleteTaxi = async (req, res, next) => {
    Taxi.findByIdAndRemove({_id: req.params.id}).then(function(response){
        res.send(response);
    }).catch(next);

}