const { BlogCategory } = require('../../models');

class BlogCategoryRepository {
    async findAll() {
        try {
            return await BlogCategory.findAll({ include: ['posts'] });
        } catch (err) {
            throw new Error(`Erro ao listar categorias: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await BlogCategory.findByPk(id, { include: ['posts'] });
        } catch (err) {
            throw new Error(`Erro ao buscar categoria: ${err.message}`);
        }
    }

    async create(data) {
        try {
            return await BlogCategory.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar categoria: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const category = await BlogCategory.findByPk(id);
            if (!category) return null;

            await category.update(data);
            return category;
        } catch (err) {
            throw new Error(`Erro ao atualizar categoria: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const category = await BlogCategory.findByPk(id);
            if (!category) return null;

            await category.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir categoria: ${err.message}`);
        }
    }
}

module.exports = new BlogCategoryRepository();
