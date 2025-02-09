const validateMongoDbId = require("../../utils/validateMongodbId");
const Category = require("./../../models/service/ServiceCatModel");
const asyncHandler = require("express-async-handler");


const createServiceCategory = asyncHandler(async (req, res) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
  
    const alreadyExists = await Category.findOne({ title: title });

    if (alreadyExists) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = await Category.create({
      title: title,
    });

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(400).json({ error: "Error creating category: " + error.message });
  }
});


const getAllCategory = asyncHandler(async(req,res)=>{
  const allCategory = await Category.find();
  return res.status(200).json({allCategory})
})

const getOneServiceCategory = asyncHandler (async(req,res)=>{
  const {id}= req.params;
  validateMongoDbId(id);

  try {
      const category = await Category.findById(id);

      if(!category){
        return res.status(404).json({message:"Category not found"})
      }

      return res.status(200).json(category)
  } catch (error) {
    return res.status(400).json({error:"Erro ao pegar categoria," +error.message})
  }

})


const updateCategoryService = asyncHandler(async(req,res)=>{

  const {id}=req.params;
  validateMongoDbId(id);

  const exists = await Category.findById(id);
  if(!exists){
    return res.status(404).json({message:"Service not found"})
  }

  try {
      const updateCategoryService = await Category.findByIdAndUpdate(id, req.body,{
        new: true, 
        runValidators: true, 
        upsert: false, 
    })

    return res.status(200).json(updateCategoryService)
    
  } catch (error) {
    return res.status(400).json({error:"erro ao actualizar categoria "+error?.message})
  }

})

const deleteCategoryService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
  
    const exists = await Category.findById(id);
    if (!exists) {
      return res.status(404).json({ message: "Category not found" });
     }

    
    const removedCategory = await Category.findByIdAndDelete(id);
    
    
    if (!removedCategory) {
      return res.status(404).json({ message: "Category could not be deleted, not found" });
    }   

    
    return res.status(200).json({ message: "Category removed successfully", category: removedCategory });
  } catch (error) {
  

    return res.status(400).json({ error: "Error deleting category: " + error.message });
  }
});



module.exports = {
  createServiceCategory,
  getAllCategory, 
  deleteCategoryService,
  updateCategoryService,
  getOneServiceCategory
}