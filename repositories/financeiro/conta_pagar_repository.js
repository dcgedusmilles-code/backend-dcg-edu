const { ContaPagar, sequelize } = require("../../models");
const { Op } = require("sequelize");

class ContaPagarRepository {
  async sumPending(startDate, endDate, filter = {}) {
    const where = {
      data_vencimento: { [Op.between]: [startDate, endDate] },
      status: { [Op.in]: ["pendente", "vencido"] },
      ...filter,
    };
    const res = await ContaPagar.findAll({
      attributes: [
        [
          sequelize.fn(
            "COALESCE",
            sequelize.fn("SUM", sequelize.col("valor")),
            0
          ),
          "total",
        ],
      ],
      where,
      raw: true,
    });
    return parseFloat(res[0].total || 0);
  }

  async findOverdue(filter = {}) {
    const where = {
      data_vencimento: { [Op.lt]: sequelize.fn("CURRENT_DATE") },
      status: "pendente",
      ...filter,
    };
    return ContaPagar.findAll({ where, order: [["data_vencimento", "ASC"]] });
  }

  async findList(startDate, endDate, filter = {}) {
    const where = {
      data_vencimento: { [Op.between]: [startDate, endDate] },
      ...filter,
    };
    return ContaPagar.findAll({ where, order: [["data_vencimento", "ASC"]] });
  }
}

module.exports = new ContaPagarRepository();
