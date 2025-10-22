const transporteRepository = require('../../repositories/infrastructure_and_logistics/transportation_repository');

class TransporteService {
    async listar() {
        return await transporteRepository.findAll();
    }

    async obterPorId(id) {
        const transporte = await transporteRepository.findById(id);
        if (!transporte) throw new Error('Transporte não encontrado');
        return transporte;
    }

    async criar(dados) {
        return await transporteRepository.create(dados);
    }

    async atualizar(id, dados) {
        const transporte = await transporteRepository.update(id, dados);
        if (!transporte) throw new Error('Transporte não encontrado');
        return transporte;
    }

    async remover(id) {
        const transporte = await transporteRepository.delete(id);
        if (!transporte) throw new Error('Transporte não encontrado');
        return transporte;
    }
}

module.exports = new TransporteService();
