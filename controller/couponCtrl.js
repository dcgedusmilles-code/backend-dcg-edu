const asyncHandler = require("express-async-handler");
const Coupon = require('../models').Coupon;

// Criar cupom
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.status(201).json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// Buscar todos os cupons
const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const coupons = await Coupon.findAll();
    res.status(200).json(coupons);
  } catch (error) {
    throw new Error(error);
  }
});

// Atualizar cupom
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    await Coupon.update(req.body, { where: { id } });
    const updatedCoupon = await Coupon.findByPk(id);
    res.status(200).json(updatedCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// Deletar cupom
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Coupon.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Cupom deletado com sucesso." });
    } else {
      res.status(404).json({ message: "Cupom não encontrado." });
    }
  } catch (error) {
    throw new Error(error);
  }
});

// Buscar cupom por ID
const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const coupon = await Coupon.findByPk(id);
    if (coupon) {
      res.status(200).json(coupon);
    } else {
      res.status(404).json({ message: "Cupom não encontrado." });
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
  getCoupon,
};
