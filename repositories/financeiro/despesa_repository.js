const { Despesa, sequelize } = require("../../models");
const { Op } = require("sequelize");

class DespesaRepository {
  
  // Criar despesa
  async create(data) {
    return Despesa.create(data);
  }

  // Listar todas as despesas
  async findAll() {
    return Despesa.findAll({
      order: [["data_pagamento", "DESC"]],
    });
  }

  // Buscar despesa por ID
  async findById(id) {
    return Despesa.findByPk(id);
  }

  // Atualizar despesa
  async update(id, data) {
    const despesa = await Despesa.findByPk(id);
    if (!despesa) return null;

    await despesa.update(data);
    return despesa;
  }

  // Deletar despesa
  async delete(id) {
    const despesa = await Despesa.findByPk(id);
    if (!despesa) return null;

    await despesa.destroy();
    return true;
  }

  // Soma despesas por período (já existia)
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

  // Listagem filtrada por período (já existia)
  async findList(startDate, endDate, filter = {}) {
    const where = {
      data_pagamento: { [Op.between]: [startDate, endDate] },
      ...filter,
    };

    return Despesa.findAll({
      where,
      order: [["data_pagamento", "ASC"]],
    });
  }
}

module.exports = new DespesaRepository();
