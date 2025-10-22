const blogCategoryService = require('../../services/blog/blog_category_service');

class BlogCategoryController {
    /**
     * Lista todas as categorias de blog
     */
    async listar(req, res) {
        try {
            const categorias = await blogCategoryService.listar();
            res.json(categorias);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca uma categoria de blog pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const categoria = await blogCategoryService.buscarPorId(req.params.id);
            if (!categoria) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }
            res.json(categoria);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria uma nova categoria de blog
     */
    async criar(req, res) {
        try {
            const categoria = await blogCategoryService.criar(req.body);
            res.status(201).json(categoria);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza uma categoria existente
     */
    async atualizar(req, res) {
        try {
            const categoria = await blogCategoryService.atualizar(req.params.id, req.body);
            if (!categoria) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }
            res.json(categoria);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove uma categoria de blog
     */
    async remover(req, res) {
        try {
            const deleted = await blogCategoryService.remover(req.params.id);
            if (!deleted) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new BlogCategoryController();
