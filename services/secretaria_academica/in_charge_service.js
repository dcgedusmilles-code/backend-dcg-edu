const encarregadoRepository = require('../../repositories/secretaria_academica/in_charge_repository');

class EncarregadoService {
  async create(data) {
    if (!data.nome) throw new Error('O campo nome é obrigatório.');
    return await encarregadoRepository.create(data);
  }

  async findAll() {
    return await encarregadoRepository.findAll();
  }

  async findById(id) {
    const encarregado = await encarregadoRepository.findById(id);
    if (!encarregado) throw new Error('Encarregado não encontrado.');
    return encarregado;
  }

  async update(id, data) {
    const encarregado = await encarregadoRepository.update(id, data);
    if (!encarregado) throw new Error('Encarregado não encontrado para atualização.');
    return encarregado;
  }

  async delete(id) {
    const encarregado = await encarregadoRepository.delete(id);
    if (!encarregado) throw new Error('Encarregado não encontrado para exclusão.');
    return encarregado;
  }
}

module.exports = new EncarregadoService();
