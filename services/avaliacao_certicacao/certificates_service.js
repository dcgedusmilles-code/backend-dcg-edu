const certificadoRepository = require('../../repositories/avaliacao_certicacao/certificates_repository');

class CertificadoService {
  async getAll(filtros) {
    return certificadoRepository.findAll(filtros);
  }

  async getById(id) {
    const certificado = await certificadoRepository.findById(id);
    if (!certificado) throw new Error('Certificado não encontrado');
    return certificado;
  }

  async create(data) {
    return certificadoRepository.create(data);
  }

  async update(id, data) {
    const certificado = await certificadoRepository.update(id, data);
    if (!certificado) throw new Error('Certificado não encontrado');
    return certificado;
  }

  async delete(id) {
    const deleted = await certificadoRepository.delete(id);
    if (!deleted) throw new Error('Certificado não encontrado');
    return deleted;
  }
}

module.exports = new CertificadoService();
