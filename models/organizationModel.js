const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var organiationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nif: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },

    about:{
        type:String,
    },

    logo:{type:String},
 
    address: {
      type: String,
    },
  
  
  },
  {
    timestamps: true,
  }
);

organiationSchema.pre("save", async function (next) {});



//Export the model
module.exports = mongoose.model("Organization", organiationSchema);
