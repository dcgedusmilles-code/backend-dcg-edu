const unitRepository = require("../../repositories/user/unit_repository");
const addressRepository = require("../../repositories/user/address_repository");

class UnitService {
  async create(data) {
    if (!data.endereco_id) throw new Error("endereco_id é obrigatório");
    const endereco = await addressRepository.findById(data.endereco_id);
    if (!endereco) throw new Error("Endereço não encontrado");

    return unitRepository.create(data);
  }

  list() {
    return unitRepository.findAll();
  }

  async get(id) {
    const unit = await unitRepository.findById(id);
    if (!unit) throw new Error("Unidade não encontrada");
    return unit;
  }

  async update(id, data) {
    return unitRepository.update(id, data);
  }

  async delete(id) {
    return unitRepository.delete(id);
  }
}

module.exports = new UnitService();
