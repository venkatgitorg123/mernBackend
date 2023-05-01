const router = require("express").Router();

let teamplayers = require("../models/team.model");

router.route('/').get((req,res)=>{
    teamplayers.find()
    .then((values)=>res.json(values))
    .catch(err=>res.status(400).json('Error:'+err));
})
module.exports= router;