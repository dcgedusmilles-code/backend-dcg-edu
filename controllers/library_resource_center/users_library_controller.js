const service = require('../../services/library_resource_center/users_library_service');

class UsuarioBibliotecaController {
    async criar(req, res) {
        try {
            const usuario = await service.createUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async listar(req, res) {
        try {
            const usuarios = await service.listarUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obter(req, res) {
        try {
            const usuario = await service.obterUsuario(req.params.id);
            if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const usuario = await service.atualizarUsuario(req.params.id, req.body);
            if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            const sucesso = await service.deletarUsuario(req.params.id);
            if (!sucesso) return res.status(404).json({ message: 'Usuário não encontrado' });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UsuarioBibliotecaController();
