'use strict';
const empresaParceiraRepository = require('../../repositories/internship_and_professional_integration_office/partner_companies_repository');

class EmpresaParceiraService {
    async criarEmpresa(data) {
        return await empresaParceiraRepository.create(data);
    }

    async listarEmpresas() {
        return await empresaParceiraRepository.findAll();
    }

    async obterEmpresa(id) {
        const empresa = await empresaParceiraRepository.findById(id);
        if (!empresa) throw new Error('Empresa parceira não encontrada');
        return empresa;
    }

    async atualizarEmpresa(id, data) {
        const empresa = await empresaParceiraRepository.update(id, data);
        if (!empresa) throw new Error('Empresa parceira não encontrada');
        return empresa;
    }

    async excluirEmpresa(id) {
        const sucesso = await empresaParceiraRepository.delete(id);
        if (!sucesso) throw new Error('Empresa parceira não encontrada');
        return true;
    }
}

module.exports = new EmpresaParceiraService();
