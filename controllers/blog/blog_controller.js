const blogService = require('../../services/blog/blog_service');

class BlogController {
    /**
     * Lista todos os blogs
     */
    async listar(req, res) {
        try {
            const blogs = await blogService.listar();
            res.json(blogs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca um blog pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const blog = await blogService.buscarPorId(req.params.id);
            if (!blog) {
                return res.status(404).json({ message: 'Blog não encontrado' });
            }
            res.json(blog);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria um novo blog
     */
    async criar(req, res) {
        try {
            const blog = await blogService.criar(req.body);
            res.status(201).json(blog);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza um blog existente
     */
    async atualizar(req, res) {
        try {
            const blog = await blogService.atualizar(req.params.id, req.body);
            if (!blog) {
                return res.status(404).json({ message: 'Blog não encontrado' });
            }
            res.json(blog);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove um blog
     */
    async remover(req, res) {
        try {
            const deleted = await blogService.remover(req.params.id);
            if (!deleted) {
                return res.status(404).json({ message: 'Blog não encontrado' });
            }
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new BlogController();
