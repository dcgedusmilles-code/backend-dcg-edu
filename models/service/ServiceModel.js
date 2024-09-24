const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var Service = new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    description:{
        type:String,
        require:true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceCategory',
        required: true,
      },

    image:{
        type:String
    }
},

{
    timestamps: true,
  },)



  module.exports = mongoose.model("Service", Service)