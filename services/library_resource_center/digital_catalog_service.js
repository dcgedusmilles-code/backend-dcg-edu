const repository = require('../../repositories/library_resource_center/digital_catalog_repository');

class CatalogoDigitalService {
  async listar() {
    return await repository.findAll();
  }

  async buscarPorId(id) {
    const catalogo = await repository.findById(id);
    if (!catalogo) throw new Error('Catálogo Digital não encontrado');
    return catalogo;
  }

  async criar(data) {
    return await repository.create(data);
  }

  async atualizar(id, data) {
    const atualizado = await repository.update(id, data);
    if (!atualizado) throw new Error('Catálogo Digital não encontrado para atualização');
    return atualizado;
  }

  async remover(id) {
    const removido = await repository.delete(id);
    if (!removido) throw new Error('Catálogo Digital não encontrado para exclusão');
    return removido;
  }
}

module.exports = new CatalogoDigitalService();
