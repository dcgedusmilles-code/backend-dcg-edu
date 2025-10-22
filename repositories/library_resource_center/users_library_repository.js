const { UsuarioBiblioteca } = require('../../models');

class UsuarioBibliotecaRepository {
    async create(data) {
        return await UsuarioBiblioteca.create(data);
    }

    async findAll() {
        return await UsuarioBiblioteca.findAll();
    }

    async findById(id) {
        return await UsuarioBiblioteca.findByPk(id);
    }

    async update(id, data) {
        const usuario = await UsuarioBiblioteca.findByPk(id);
        if (!usuario) return null;
        return await usuario.update(data);
    }

    async delete(id) {
        const usuario = await UsuarioBiblioteca.findByPk(id);
        if (!usuario) return null;
        await usuario.destroy();
        return true;
    }
}

module.exports = new UsuarioBibliotecaRepository();
