const Service = require("./../../models/service/ServiceModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");


const createService = asyncHandler(async (req, res) => {

    const {title,description,image, category}= req.body;

    if(!title || !description || !category){
        return res.status(402).json({message:"title, description and category is required"})
    }

    const alreadyExists = await Service.findOne({title:title})

    if(alreadyExists){
      return res.status(400).json({message:"Service alread exist!"});
    }

    try {
      const newService = await Service.create({
        title:title,
        description:description,
        category: category,
        image: image, 
      });
  
      const populatedService = await Service.findById(newService._id)
        .populate('category')
      res.json(populatedService);
    } catch (error) {
      return res.status(400).json({error:"Error to create service,=>"+error?.message});
    }
});


const getAllService = asyncHandler(async (req,res)=>{

      try {
        const services = await Service.find().populate('category');
         return res.status(200).json(services)
      } catch (error) {
        return res.status(400).json({error:"Error to view services list =>"+error?.message})
      }
    
})

const getOneService =asyncHandler(async(req,res)=>{
  const {id}=req.params;

  if(!id){
    return res.status(400).json({message:"bad request, please enter winth id service"});
  }

  try{
    validateMongoDbId(id);
    const service = await Service.findById(id).populate("category");

    if(!service){
      return res.status(400).json({message:"service no found"});
    }

    return res.status(200).json(service)
  }catch(error){
      return res.status(400).json({error:"erro ao pegar servico "+error?.message})
  }


})


const updateService = asyncHandler(async (req, res) => {
  const { id } = req.params;  
  validateMongoDbId(id);  


  const exists = await Service.findById(id);
  if (!exists) {
    return res.status(404).json({ message: "Service not found" });
  }

  


  try {
    
    const updatedService = await Service.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true, 
        runValidators: true, 
        upsert: false, 
      }
    );

    // 
    console.log("Serviço atualizado:", updatedService);

    return res.status(200).json(updatedService);
  } catch (error) {
    return res.status(400).json({ error: "Error updating service: " + error.message });
  }
});

const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
  
    const exists = await Service.findById(id);
    if (!exists) {
      return res.status(404).json({ message: "Service not found" });
     }

    
    const removedService = await Service.findByIdAndDelete(id);
    
    
    if (!removedService) {
      return res.status(404).json({ message: "Service could not be deleted, not found" });
    }   

    
    return res.status(200).json({ message: "Service removed successfully", service: removedService });
  } catch (error) {
  

    return res.status(400).json({ error: "Error deleting service: " + error.message });
  }
});



module.exports = {createService, getOneService,getAllService,updateService,deleteService}