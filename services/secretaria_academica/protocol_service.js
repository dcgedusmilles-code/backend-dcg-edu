const protocoloRepository = require('../../repositories/secretaria_academica/protocol_repository');

class ProtocoloService {
    async create(data) {
        if (!data.aluno_id || !data.tipo) {
            throw new Error('Campos obrigatórios: aluno_id, tipo');
        }
        return await protocoloRepository.create(data);
    }

    async findAll() {
        return await protocoloRepository.findAll();
    }

    async findById(id) {
        const protocolo = await protocoloRepository.findById(id);
        if (!protocolo) throw new Error('Protocolo não encontrado');
        return protocolo;
    }

    async update(id, data) {
        const protocolo = await protocoloRepository.update(id, data);
        if (!protocolo) throw new Error('Protocolo não encontrado');
        return protocolo;
    }

    async delete(id) {
        const protocolo = await protocoloRepository.delete(id);
        if (!protocolo) throw new Error('Protocolo não encontrado');
        return protocolo;
    }
}

module.exports = new ProtocoloService();
