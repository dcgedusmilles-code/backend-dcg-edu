const Orgazation = require("../models/organizationModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const organizationModel = require("../models/organizationModel");

const createOrganization = asyncHandler(async (req, res) => {
    try {

      const {email,nif, mobile}=req.body

      const AlredExist = await organizationModel.findOne({
        $or: [{ email }, { nif },{mobile}],
      })
      
      if(AlredExist){
          return res.status(400).json({message:"Organization alreade exists, nif, email, mobile just in use"});
      }
      
      const newOrganization = await Orgazation.create(req.body);
      res.status(201).json(newOrganization);
    } catch (error) {
      throw new Error(error);
    }
  });


  const updateOrganization = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const updatedOrganization = await organizationModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedOrganization).status(200);
    } catch (error) {
      throw new Error(error);
    }
  });



  const getOrganization = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const getaOrganization = await organizationModel.findById(id);
      res.json(getaOrganization);
    } catch (error) {
      throw new Error(error);
    }
  });


  const getallOrganization = asyncHandler(async (req, res) => {
    try {
      const getallOrganization = await organizationModel.find();
      res.json(getallOrganization).status(200);
    } catch (error) {
      throw new Error(error);
    }
  });




module.exports ={createOrganization,updateOrganization,getOrganization,getallOrganization }




