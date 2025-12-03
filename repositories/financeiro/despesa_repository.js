const { Despesa, sequelize } = require("../../models");
const { Op } = require("sequelize");

class DespesaRepository {
  async sumByPeriod(startDate, endDate, filter = {}) {
    const where = {
      data_pagamento: { [Op.between]: [startDate, endDate] },
      ...filter,
    };
    const res = await Despesa.findAll({
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

  async findList(startDate, endDate, filter = {}) {
    const where = {
      data_pagamento: { [Op.between]: [startDate, endDate] },
      ...filter,
    };
    return Despesa.findAll({ where, order: [["data_pagamento", "ASC"]] });
  }
}

module.exports = new DespesaRepository();
