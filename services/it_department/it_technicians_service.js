const tecnicoTIRepository = require('../../repositories/it_department/it_technicians_repository');

class TecnicoTIService {
    async criarTecnico(data) {
        return await tecnicoTIRepository.create(data);
    }

    async listarTecnicos() {
        return await tecnicoTIRepository.findAll();
    }

    async obterTecnico(id) {
        const tecnico = await tecnicoTIRepository.findById(id);
        if (!tecnico) throw new Error('Técnico não encontrado');
        return tecnico;
    }

    async atualizarTecnico(id, data) {
        const tecnico = await tecnicoTIRepository.update(id, data);
        if (!tecnico) throw new Error('Técnico não encontrado');
        return tecnico;
    }

    async deletarTecnico(id) {
        const tecnico = await tecnicoTIRepository.delete(id);
        if (!tecnico) throw new Error('Técnico não encontrado');
        return tecnico;
    }
}

module.exports = new TecnicoTIService();
