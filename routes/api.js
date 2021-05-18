const express = require ('express');
const router = express.Router();
const Taxi = require('../models/taxi');
const {getTaxiNearBy,updateTaxi,deleteTaxi,addTaxi} = require('../controllers/taxi')




router.get('/taxi',getTaxiNearBy);
router.post('/taxi', addTaxi);
router.put('/taxi/:id', updateTaxi);
router.delete('/taxi/:id', deleteTaxi);

module.exports = router;