const inadimplenciaRepository = require('../../repositories/financeiro/default_report_repository');

class InadimplenciaService {
    async create(data) {
        return await inadimplenciaRepository.create(data);
    }

    async findAll() {
        return await inadimplenciaRepository.findAll();
    }

    async findById(id) {
        return await inadimplenciaRepository.findById(id);
    }

    async update(id, data) {
        return await inadimplenciaRepository.update(id, data);
    }

    async delete(id) {
        return await inadimplenciaRepository.delete(id);
    }
}

module.exports = new InadimplenciaService();
