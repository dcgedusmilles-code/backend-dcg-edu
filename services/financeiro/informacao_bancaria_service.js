const repo = require("../../repositories/financeiro/informacao_bancaria_repository");
const Unidade = require("../../repositories/user/unit_repository");
// const { Unidade } = require("../../models");

class InformacaoBancariaService {
  async create(data) {
    if (data.unidade_id) {
      const unidade = await Unidade.findById(data.unidade_id);
      if (!unidade) throw new Error("Unidade informada não existe.");
    }
    if (!data.banco_nome || !data.conta)
      throw new Error("Banco e conta são obrigatórios.");
    return repo.create(data);
  }

  async list(filter) {
    return repo.findAll(filter);
  }
  async get(id) {
    const item = await repo.findById(id);
    if (!item) throw new Error("Não encontrado");
    return item;
  }
  async update(id, data) {
    return repo.update(id, data);
  }
  async remove(id) {
    return repo.delete(id);
  }
}

module.exports = new InformacaoBancariaService();
