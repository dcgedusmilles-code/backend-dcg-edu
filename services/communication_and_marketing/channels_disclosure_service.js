const canalDivulgacaoRepository = require('../../repositories/communication_and_marketing/channels_disclosure_repository');

class CanalDivulgacaoService {
    async criarCanal(data) {
        return await canalDivulgacaoRepository.create(data);
    }

    async listarCanais() {
        return await canalDivulgacaoRepository.findAll();
    }

    async buscarPorId(id) {
        return await canalDivulgacaoRepository.findById(id);
    }

    async atualizarCanal(id, data) {
        return await canalDivulgacaoRepository.update(id, data);
    }

    async deletarCanal(id) {
        return await canalDivulgacaoRepository.delete(id);
    }
}

module.exports = new CanalDivulgacaoService();
