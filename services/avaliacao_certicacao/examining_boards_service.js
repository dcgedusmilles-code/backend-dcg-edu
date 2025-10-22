const bancaRepo = require('../../repositories/avaliacao_certicacao/examining_boards_repository');

class BancaExaminadoraService {
    async listar() {
        return await bancaRepo.findAll();
    }

    async buscarPorId(id) {
        return await bancaRepo.findById(id);
    }

    async criar(dados) {
        return await bancaRepo.create(dados);
    }

    async atualizar(id, dados) {
        return await bancaRepo.update(id, dados);
    }

    async remover(id) {
        return await bancaRepo.delete(id);
    }
}

module.exports = new BancaExaminadoraService();
