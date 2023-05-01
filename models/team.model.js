const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const teamSchema = new Schema(
    {
        Name:{
            type: String,
            require:true,
            trim:true,
           minlength:2,
        },
        Age:{
            type:Number,
            require:true,
            trim:true,
            minlength:2,
        },
        JerseyNo:{
            type:Number,
            require:true,
            trim:true,
            minlength:2,
        },
        Bating:{
            type:String,
            require:true,
            trim:true,
            minlength:2,
        },
        Bowling:{
            type:String,
            require:true,
            trim:true,
            minlength:2,
        },
        Matches:{
            type:Number,
            require:true,
            trim:true,
            minlength:1,
        },
        Runs:{
            type:Number,
            require:true,
            trim:true,
            minlength:1,
        },
        HighScore:{
            type:Number,
            require:true,
            trim:true,
            minlength:1,
        },
        Avearge:{
            type:Number,
            require:true,
            trim:true,
            minlength:1,
        },
        Wickets:{
            type:Number,
            require:true,
            trim:true,
            minlength:1,
        },
        Economy:{
            type:Number,
            require:true,
            trim:true,
            minlength:1,
        },
        description:{type:String, require: true},
        duration: {type:Number, require: true},
       date:{type:Date, require: true}
        },{
        timestamps:true,

    }
);

const TeamPlayers = mongoose.model("TeamPlayers", teamSchema);

module.exports =TeamPlayers;