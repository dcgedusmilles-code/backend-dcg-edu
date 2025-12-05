const { ContaPagar, sequelize } = require("../../models");
const { Op } = require("sequelize");

class ContaPagarRepository {

  // 📌 Criar
  async create(data) {
    return ContaPagar.create(data);
  }

  // 📌 Buscar por ID
  async findById(id) {
    return ContaPagar.findByPk(id);
  }

  // 📌 Listar todos (com filtro opcional)
  async findAll(filter = {}) {
    return ContaPagar.findAll({ where: filter, order: [["id", "DESC"]] });
  }

  // 📌 Atualizar
  async update(id, data) {
    const item = await ContaPagar.findByPk(id);
    if (!item) throw new Error("Conta a pagar não encontrada");

    return item.update(data);
  }

  // 📌 Deletar
  async delete(id) {
    const item = await ContaPagar.findByPk(id);
    if (!item) throw new Error("Conta a pagar não encontrada");

    await item.destroy();
    return true;
  }

  // 📌 Somatório de pendentes
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

  // 📌 Buscar vencidos
  async findOverdue(filter = {}) {
    const where = {
      data_vencimento: { [Op.lt]: sequelize.fn("CURRENT_DATE") },
      status: "pendente",
      ...filter,
    };

    return ContaPagar.findAll({
      where,
      order: [["data_vencimento", "ASC"]],
    });
  }

  // 📌 Listar por período
  async findList(startDate, endDate, filter = {}) {
    const where = {
      data_vencimento: { [Op.between]: [startDate, endDate] },
      ...filter,
    };

    return ContaPagar.findAll({
      where,
      order: [["data_vencimento", "ASC"]],
    });
  }

  // ✔ Métodos que estavam faltando no seu Service:
  async getPendentes() {
    return ContaPagar.findAll({
      where: { status: "pendente" },
      order: [["data_vencimento", "ASC"]],
    });
  }

  async sumPendentes() {
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
      where: { status: "pendente" },
      raw: true,
    });

    return parseFloat(res[0].total || 0);
  }
}

module.exports = new ContaPagarRepository();
