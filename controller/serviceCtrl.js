const asyncHandler = require("express-async-handler");
const { Service, ServiceCategory } = require("../models");


const createService = asyncHandler(async (req, res) => {
  const { title, description, categoryId } = req.body;
  const imageUrls = req.uploadedImages || [];


  if (!title || !description || !categoryId) {
    return res.status(402).json({
      message: "title, description and categoryId are required",
    });
  }

  const alreadyExists = await Service.findOne({ where: { title } });

  if (alreadyExists) {
    return res.status(400).json({ message: "Service already exists!" });
  }

  try {
    const newService = await Service.create({
      title,
      description,
      images: imageUrls,
      categoryId,
    });

    const populatedService = await Service.findByPk(newService.id, {
      include: { model: ServiceCategory, as: "category" },
    });

    res.status(201).json(populatedService);
  } catch (error) {
    res.status(500).json({ error: "Error creating service: " + error.message });
  }
});

// Listar todos os serviços
const getAllService = asyncHandler(async (req, res) => {
  try {
    const services = await Service.findAll({
      include: { model: ServiceCategory, as: "category" },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: "Error listing services: " + error.message });
  }
});

// Obter um serviço por ID
const getOneService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID is required." });
  }

  try {
    const service = await Service.findByPk(id, {
      include: { model: ServiceCategory, as: "category" },
    });

    if (!service) {
      return res.status(404).json({ message: "Service not found." });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: "Error fetching service: " + error.message });
  }
});

// Atualizar serviço
const updateService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const service = await Service.findByPk(id);
  if (!service) {
    return res.status(404).json({ message: "Service not found." });
  }

  try {
    await service.update(req.body);

    const updatedService = await Service.findByPk(id, {
      include: { model: ServiceCategory, as: "category" },
    });

    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ error: "Error updating service: " + error.message });
  }
});

// Deletar serviço
const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found." });
    }

    await service.destroy();

    res.status(200).json({
      message: "Service removed successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({ error: "Error deleting service: " + error.message });
  }
});

module.exports = {
  createService,
  getAllService,
  getOneService,
  updateService,
  deleteService,
};