const conteudoService = require('../../services/communication_and_marketing/contents_service');

class ConteudoController {
    async create(req, res) {
        try {
            const conteudo = await conteudoService.criarConteudo(req.body);
            res.status(201).json(conteudo);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao criar conteúdo', error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const conteudos = await conteudoService.listarConteudos();
            res.json(conteudos);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar conteúdos', error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const conteudo = await conteudoService.buscarPorId(req.params.id);
            if (!conteudo) return res.status(404).json({ message: 'Conteúdo não encontrado' });
            res.json(conteudo);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar conteúdo', error: err.message });
        }
    }

    async update(req, res) {
        try {
            const conteudo = await conteudoService.atualizarConteudo(req.params.id, req.body);
            if (!conteudo) return res.status(404).json({ message: 'Conteúdo não encontrado' });
            res.json(conteudo);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao atualizar conteúdo', error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await conteudoService.deletarConteudo(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Conteúdo não encontrado' });
            res.json({ message: 'Conteúdo removido com sucesso' });
        } catch (err) {
            res.status(500).json({ message: 'Erro ao deletar conteúdo', error: err.message });
        }
    }
}

module.exports = new ConteudoController();
