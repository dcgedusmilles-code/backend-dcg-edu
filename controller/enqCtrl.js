const asyncHandler = require("express-async-handler");
const Enquiry = require('../models').Enquiry;

const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.status(201).json(newEnquiry);
  } catch (error) {
    throw new Error(error.message);
  }
});

const updateEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const enquiry = await Enquiry.findByPk(id);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    await enquiry.update(req.body);
    res.status(200).json(enquiry);
  } catch (error) {
    throw new Error(error.message);
  }
});

const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const enquiry = await Enquiry.findByPk(id);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    await enquiry.destroy();
    res.status(200).json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    throw new Error(error.message);
  }
});

const getEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const enquiry = await Enquiry.findByPk(id);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.status(200).json(enquiry);
  } catch (error) {
    throw new Error(error.message);
  }
});

const getallEnquiry = asyncHandler(async (req, res) => {
  try {
    const enquiries = await Enquiry.findAll();
    res.status(200).json(enquiries);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getallEnquiry,
};

