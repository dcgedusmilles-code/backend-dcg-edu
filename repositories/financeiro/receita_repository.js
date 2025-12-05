const { Receita, sequelize } = require("../../models");
const { Op } = require("sequelize");

class ReceitaRepository {

  // Criar receita
  async create(data) {
    return Receita.create(data);
  }

  // Listar todas as receitas (sem filtros)
  async findAll() {
    return Receita.findAll({
      order: [["data_recebimento", "DESC"]],
    });
  }

  // Buscar por ID
  async findById(id) {
    return Receita.findByPk(id);
  }

  // Atualizar receita
  async update(id, data) {
    const receita = await Receita.findByPk(id);
    if (!receita) return null;

    await receita.update(data);
    return receita;
  }

  // Deletar receita
  async delete(id) {
    const receita = await Receita.findByPk(id);
    if (!receita) return null;

    await receita.destroy();
    return true;
  }

  // Somatório de receitas por período (método já existente)
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

  // Listagem filtrada por período (método já existente)
  async findList(startDate, endDate, filter = {}) {
    const where = {
      data_recebimento: { [Op.between]: [startDate, endDate] },
      ...filter,
    };

    return Receita.findAll({
      where,
      order: [["data_recebimento", "ASC"]],
    });
  }
}

module.exports = new ReceitaRepository();
