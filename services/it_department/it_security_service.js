const segurancaTIRepository = require('../../repositories/it_department/it_security_repository');

class SegurancaTIService {
    async criar(data) {
        return await segurancaTIRepository.create(data);
    }

    async listar() {
        return await segurancaTIRepository.findAll();
    }

    async buscarPorId(id) {
        const registro = await segurancaTIRepository.findById(id);
        if (!registro) throw new Error('Registro não encontrado');
        return registro;
    }

    async atualizar(id, data) {
        const atualizado = await segurancaTIRepository.update(id, data);
        if (!atualizado) throw new Error('Registro não encontrado');
        return atualizado;
    }

    async deletar(id) {
        const sucesso = await segurancaTIRepository.delete(id);
        if (!sucesso) throw new Error('Registro não encontrado');
        return true;
    }
}

module.exports = new SegurancaTIService();
