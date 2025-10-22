const conteudoRepository = require('../../repositories/communication_and_marketing/contents_repository');

class ConteudoService {
    async criarConteudo(data) {
        return await conteudoRepository.create(data);
    }

    async listarConteudos() {
        return await conteudoRepository.findAll();
    }

    async buscarPorId(id) {
        return await conteudoRepository.findById(id);
    }

    async atualizarConteudo(id, data) {
        return await conteudoRepository.update(id, data);
    }

    async deletarConteudo(id) {
        return await conteudoRepository.delete(id);
    }
}

module.exports = new ConteudoService();
