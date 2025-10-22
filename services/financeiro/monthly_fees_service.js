const mensalidadeRepository = require('../../repositories/financeiro/monthly_fees_repository');

class MensalidadeService {
    async createMensalidade(data) {
        return await mensalidadeRepository.create(data);
    }

    async getMensalidades() {
        return await mensalidadeRepository.findAll();
    }

    async getMensalidadeById(id) {
        return await mensalidadeRepository.findById(id);
    }

    async updateMensalidade(id, data) {
        return await mensalidadeRepository.update(id, data);
    }

    async deleteMensalidade(id) {
        return await mensalidadeRepository.delete(id);
    }
}

module.exports = new MensalidadeService();
