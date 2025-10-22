const usuarioTIService = require('../../services/it_department/it_users_service');

class UsuarioTIController {
    async criar(req, res) {
        try {
            const usuario = await usuarioTIService.criarUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async listar(req, res) {
        try {
            const usuarios = await usuarioTIService.listarUsuarios();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obter(req, res) {
        try {
            const usuario = await usuarioTIService.obterUsuario(req.params.id);
            res.json(usuario);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const usuario = await usuarioTIService.atualizarUsuario(req.params.id, req.body);
            res.json(usuario);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await usuarioTIService.deletarUsuario(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new UsuarioTIController();
