const feriasRepository = require('../../repositories/human_resources/vacation_repository');

class FeriasService {
    async listarTodas() {
        return await feriasRepository.findAll();
    }

    async buscarPorId(id) {
        const ferias = await feriasRepository.findById(id);
        if (!ferias) throw new Error('Férias não encontradas');
        return ferias;
    }

    async criar(dados) {
        return await feriasRepository.create(dados);
    }

    async atualizar(id, dados) {
        const atualizado = await feriasRepository.update(id, dados);
        if (!atualizado) throw new Error('Férias não encontradas');
        return atualizado;
    }

    async deletar(id) {
        const deletado = await feriasRepository.delete(id);
        if (!deletado) throw new Error('Férias não encontradas');
        return deletado;
    }
}

module.exports = new FeriasService();
