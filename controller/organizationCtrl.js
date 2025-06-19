const asyncHandler = require("express-async-handler");
const Organization = require('../models').Organization;


// CREATE
const createOrganization = asyncHandler(async (req, res) => {
  try {
    const { email, nif, mobile } = req.body;

    const alreadyExists = await Organization.findOne({
      where: {
        [Organization.Sequelize.Op.or]: [
          { email },
          { nif },
          { mobile }
        ]
      }
    });

    if (alreadyExists) {
      return res.status(400).json({
        message: "Organization already exists. NIF, email or mobile already in use."
      });
    }

    const newOrganization = await Organization.create(req.body);
    res.status(201).json(newOrganization);
  } catch (error) {
    throw new Error(error.message);
  }
});

// UPDATE
const updateOrganization = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findByPk(id);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }

    await organization.update(req.body);
    res.status(200).json(organization);
  } catch (error) {
    throw new Error(error.message);
  }
});

// GET ONE
const getOrganization = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findByPk(id);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }

    res.status(200).json(organization);
  } catch (error) {
    throw new Error(error.message);
  }
});

// GET ALL
const getallOrganization = asyncHandler(async (req, res) => {
  try {
    const organizations = await Organization.findAll();
    res.status(200).json(organizations);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createOrganization,
  updateOrganization,
  getOrganization,
  getallOrganization,
};

