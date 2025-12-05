const { ContaReceber, sequelize } = require("../../models");
const { Op } = require("sequelize");

class ContaReceberRepository {

  // 📌 Criar novo registro
  async create(data) {
    return ContaReceber.create(data);
  }

  // 📌 Buscar por ID
  async findById(id) {
    return ContaReceber.findByPk(id);
  }

  // 📌 Listar todos (com filtros opcionais)
  async findAll(filter = {}) {
    return ContaReceber.findAll({ where: filter, order: [["id", "DESC"]] });
  }

  // 📌 Atualizar por ID
  async update(id, data) {
    const record = await ContaReceber.findByPk(id);
    if (!record) throw new Error("Conta a receber não encontrada");

    return record.update(data);
  }

  // 📌 Deletar por ID
  async delete(id) {
    const record = await ContaReceber.findByPk(id);
    if (!record) throw new Error("Conta a receber não encontrada");

    await record.destroy();
    return true;
  }

  // 📌 Somatório de contas pendentes no período
  async sumPending(startDate, endDate, filter = {}) {
    const where = {
      data_vencimento: { [Op.between]: [startDate, endDate] },
      status: { [Op.in]: ["pendente", "vencido"] },
      ...filter,
    };

    const res = await ContaReceber.findAll({
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

  // 📌 Buscar contas vencidas
  async findOverdue(filter = {}) {
    const where = {
      data_vencimento: { [Op.lt]: sequelize.fn("CURRENT_DATE") },
      status: "pendente",
      ...filter,
    };

    return ContaReceber.findAll({
      where,
      order: [["data_vencimento", "ASC"]],
    });
  }

  // 📌 Listagem filtrada por período
  async findList(startDate, endDate, filter = {}) {
    const where = {
      data_vencimento: { [Op.between]: [startDate, endDate] },
      ...filter,
    };

    return ContaReceber.findAll({
      where,
      order: [["data_vencimento", "ASC"]],
    });
  }
}

module.exports = new ContaReceberRepository();
