const documentoRepo = require('../../repositories/secretaria_academica/academic_documents_repository');

class DocumentoAcademicoService {
  async create(data) {
    return await documentoRepo.create(data);
  }

  async getAll() {
    return await documentoRepo.findAll();
  }

  async getById(id) {
    const doc = await documentoRepo.findById(id);
    if (!doc) throw new Error('Documento não encontrado');
    return doc;
  }

  async update(id, data) {
    const updated = await documentoRepo.update(id, data);
    if (!updated) throw new Error('Documento não encontrado');
    return updated;
  }

  async delete(id) {
    const deleted = await documentoRepo.delete(id);
    if (!deleted) throw new Error('Documento não encontrado');
    return deleted;
  }
}

module.exports = new DocumentoAcademicoService();
