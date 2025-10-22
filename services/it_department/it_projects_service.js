const projetoTIRepository = require('../../repositories/it_department/it_projects_repository');

class ProjetoTIService {
    async createProjeto(data) {
        return await projetoTIRepository.create(data);
    }

    async listarProjetos() {
        return await projetoTIRepository.findAll();
    }

    async buscarPorId(id) {
        const projeto = await projetoTIRepository.findById(id);
        if (!projeto) throw new Error('Projeto não encontrado');
        return projeto;
    }

    async atualizarProjeto(id, data) {
        const projeto = await projetoTIRepository.update(id, data);
        if (!projeto) throw new Error('Projeto não encontrado');
        return projeto;
    }

    async deletarProjeto(id) {
        const sucesso = await projetoTIRepository.delete(id);
        if (!sucesso) throw new Error('Projeto não encontrado');
        return true;
    }
}

module.exports = new ProjetoTIService();
