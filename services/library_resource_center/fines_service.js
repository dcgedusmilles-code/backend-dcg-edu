const multaRepository = require('../../repositories/library_resource_center/fines_repository');

class MultaService {
    async listar() {
        return await multaRepository.findAll();
    }

    async buscarPorId(id) {
        const multa = await multaRepository.findById(id);
        if (!multa) throw new Error('Multa não encontrada');
        return multa;
    }

    async criar(dados) {
        if (!dados.valor || !dados.id_usuario || !dados.id_emprestimo)
            throw new Error('Campos obrigatórios não informados');
        return await multaRepository.create(dados);
    }

    async atualizar(id, dados) {
        const multa = await multaRepository.update(id, dados);
        if (!multa) throw new Error('Multa não encontrada');
        return multa;
    }

    async deletar(id) {
        const sucesso = await multaRepository.delete(id);
        if (!sucesso) throw new Error('Multa não encontrada');
        return true;
    }
}

module.exports = new MultaService();
