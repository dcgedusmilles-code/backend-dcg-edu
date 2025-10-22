const emprestimoRepository = require('../../repositories/library_resource_center/loans_repository');

class EmprestimoService {
    async listar() {
        return await emprestimoRepository.findAll();
    }

    async buscarPorId(id) {
        const emprestimo = await emprestimoRepository.findById(id);
        if (!emprestimo) throw new Error('Empréstimo não encontrado');
        return emprestimo;
    }

    async criar(dados) {
        if (!dados.id_exemplar || !dados.id_usuario || !dados.data_emprestimo || !dados.data_prevista_devolucao)
            throw new Error('Campos obrigatórios não informados');

        return await emprestimoRepository.create(dados);
    }

    async atualizar(id, dados) {
        const emprestimo = await emprestimoRepository.update(id, dados);
        if (!emprestimo) throw new Error('Empréstimo não encontrado');
        return emprestimo;
    }

    async deletar(id) {
        const sucesso = await emprestimoRepository.delete(id);
        if (!sucesso) throw new Error('Empréstimo não encontrado');
        return true;
    }
}

module.exports = new EmprestimoService();
