const repository = require('../../repositories/human_resources/positions_repository');

class CargoService {
    async criarCargo(data) {
        return await repository.create(data);
    }

    async listarCargos() {
        return await repository.findAll();
    }

    async buscarPorId(id) {
        const cargo = await repository.findById(id);
        if (!cargo) throw new Error('Cargo não encontrado');
        return cargo;
    }

    async atualizarCargo(id, data) {
        const atualizado = await repository.update(id, data);
        if (!atualizado) throw new Error('Cargo não encontrado para atualização');
        return atualizado;
    }

    async deletarCargo(id) {
        const deletado = await repository.delete(id);
        if (!deletado) throw new Error('Cargo não encontrado para exclusão');
        return true;
    }
}

module.exports = new CargoService();
