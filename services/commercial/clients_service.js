const clienteRepository = require('../../repositories/commercial/clients_repository');

class ClienteService {
    constructor(repository) {
        this.repository = repository;
    }

    async listar() {
        return await this.repository.findAll();
    }

    async buscarPorId(id) {
        return await this.repository.findById(id);
    }

    async criar(dados) {
        return await this.repository.create(dados);
    }

    async atualizar(id, dados) {
        return await this.repository.update(id, dados);
    }

    async remover(id) {
        return await this.repository.delete(id);
    }
}

module.exports = new ClienteService(clienteRepository);
