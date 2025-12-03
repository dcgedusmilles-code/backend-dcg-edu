const materialRepo = require('../../repositories/pedagogico/material_didatico_repository');

class MaterialDidaticoService {
  async listar() {
    return await materialRepo.findAll();
  }

  async obter(id) {
    const material = await materialRepo.findById(id);
    if (!material) throw new Error("Material didático não encontrado");
    return material;
  }

  async criar(dados) {
    if (!dados.titulo || !dados.nivel || !dados.tipo)
      throw new Error("Campos obrigatórios ausentes");

    return await materialRepo.create(dados);
  }

  async atualizar(id, dados) {
    await this.obter(id);
    return await materialRepo.update(id, dados);
  }

  async remover(id) {
    await this.obter(id);
    return await materialRepo.delete(id);
  }
}

module.exports = new MaterialDidaticoService();
