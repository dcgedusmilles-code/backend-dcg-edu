const usuarioTIRepository = require('../../repositories/it_department/it_users_repository');

class UsuarioTIService {
    async criarUsuario(data) {
        return await usuarioTIRepository.create(data);
    }

    async listarUsuarios() {
        return await usuarioTIRepository.findAll();
    }

    async obterUsuario(id) {
        const usuario = await usuarioTIRepository.findById(id);
        if (!usuario) throw new Error('Usuário não encontrado');
        return usuario;
    }

    async atualizarUsuario(id, data) {
        const usuario = await usuarioTIRepository.update(id, data);
        if (!usuario) throw new Error('Usuário não encontrado');
        return usuario;
    }

    async deletarUsuario(id) {
        const usuario = await usuarioTIRepository.delete(id);
        if (!usuario) throw new Error('Usuário não encontrado');
        return usuario;
    }
}

module.exports = new UsuarioTIService();
