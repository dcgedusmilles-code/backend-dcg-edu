const { Blog } = require('../../models');

class BlogRepository {
    async findAll() {
        try {
            return await Blog.findAll({
                include: ['category', 'autor'],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar blogs: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await Blog.findByPk(id, {
                include: ['category', 'autor']
            });
        } catch (err) {
            throw new Error(`Erro ao buscar blog: ${err.message}`);
        }
    }

    async create(data) {
        try {
            return await Blog.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar blog: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const blog = await Blog.findByPk(id);
            if (!blog) return null;

            await blog.update(data);
            return blog;
        } catch (err) {
            throw new Error(`Erro ao atualizar blog: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const blog = await Blog.findByPk(id);
            if (!blog) return null;

            await blog.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir blog: ${err.message}`);
        }
    }
}

module.exports = new BlogRepository();
