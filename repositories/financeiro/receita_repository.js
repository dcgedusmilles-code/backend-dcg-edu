const { Receita, sequelize } = require("../../models");
const { Op } = require("sequelize");

class ReceitaRepository {
  async sumByPeriod(startDate, endDate, filter = {}) {
    const where = {
      data_recebimento: { [Op.between]: [startDate, endDate] },
      ...filter,
    };
    const res = await Receita.findAll({
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
      data_recebimento: { [Op.between]: [startDate, endDate] },
      ...filter,
    };
    return Receita.findAll({ where, order: [["data_recebimento", "ASC"]] });
  }
}

module.exports = new ReceitaRepository();
