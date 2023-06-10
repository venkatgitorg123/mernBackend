const router = require("express").Router();

let teamplayers = require("../models/team.model");

router.route('/').get((req,res)=>{
    teamplayers.find()
    .then((values)=>res.json(values))
    .catch(err=>res.status(400).json('Error:'+err));
})


router.route('/:pid').get((req,res)=>{
    const pid = req.params.pid;
    teamplayers.find({ "pid": pid })
    .then((values)=>res.json(values))
    .catch(err=>res.status(500).send(err + 'Internal Server Error'));
})
module.exports= router;