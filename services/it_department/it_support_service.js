const suporteTIRepository = require('../../repositories/it_department/it_support_repository');

class SuporteTIService {
    async criarSuporte(data) {
        return await suporteTIRepository.create(data);
    }

    async listarSuportes() {
        return await suporteTIRepository.findAll();
    }

    async obterSuporte(id) {
        const suporte = await suporteTIRepository.findById(id);
        if (!suporte) throw new Error('Suporte não encontrado');
        return suporte;
    }

    async atualizarSuporte(id, data) {
        const suporte = await suporteTIRepository.update(id, data);
        if (!suporte) throw new Error('Suporte não encontrado');
        return suporte;
    }

    async deletarSuporte(id) {
        const suporte = await suporteTIRepository.delete(id);
        if (!suporte) throw new Error('Suporte não encontrado');
        return suporte;
    }
}

module.exports = new SuporteTIService();
