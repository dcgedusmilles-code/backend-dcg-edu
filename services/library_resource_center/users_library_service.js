const repository = require('../../repositories/library_resource_center/users_library_repository');

class UsuarioBibliotecaService {
    async createUsuario(data) {
        return await repository.create(data);
    }

    async listarUsuarios() {
        return await repository.findAll();
    }

    async obterUsuario(id) {
        return await repository.findById(id);
    }

    async atualizarUsuario(id, data) {
        return await repository.update(id, data);
    }

    async deletarUsuario(id) {
        return await repository.delete(id);
    }
}

module.exports = new UsuarioBibliotecaService();
