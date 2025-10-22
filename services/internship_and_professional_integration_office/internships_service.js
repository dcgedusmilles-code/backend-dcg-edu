'use strict';
const estagioRepository = require('../../repositories/internship_and_professional_integration_office/internships_repository');

class EstagioService {
    async criarEstagio(data) {
        return await estagioRepository.create(data);
    }

    async listarEstagios() {
        return await estagioRepository.findAll();
    }

    async obterEstagio(id) {
        const estagio = await estagioRepository.findById(id);
        if (!estagio) throw new Error('Estágio não encontrado');
        return estagio;
    }

    async atualizarEstagio(id, data) {
        const estagio = await estagioRepository.update(id, data);
        if (!estagio) throw new Error('Estágio não encontrado');
        return estagio;
    }

    async excluirEstagio(id) {
        const sucesso = await estagioRepository.delete(id);
        if (!sucesso) throw new Error('Estágio não encontrado');
        return true;
    }
}

module.exports = new EstagioService();
