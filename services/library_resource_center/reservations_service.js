const reservaRepository = require('../../repositories/library_resource_center/reservations_repository');

class ReservaService {
    async listar() {
        return await reservaRepository.findAll();
    }

    async buscarPorId(id) {
        return await reservaRepository.findById(id);
    }

    async criar(dados) {
        return await reservaRepository.create(dados);
    }

    async atualizar(id, dados) {
        return await reservaRepository.update(id, dados);
    }

    async remover(id) {
        return await reservaRepository.delete(id);
    }
}

module.exports = new ReservaService();
