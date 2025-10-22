const blogCategoryRepo = require('../../repositories/blog/blog_category_repository');

class BlogCategoryService {
    async listar() {
        return await blogCategoryRepo.findAll();
    }

    async buscarPorId(id) {
        return await blogCategoryRepo.findById(id);
    }

    async criar(dados) {
        return await blogCategoryRepo.create(dados);
    }

    async atualizar(id, dados) {
        return await blogCategoryRepo.update(id, dados);
    }

    async remover(id) {
        return await blogCategoryRepo.delete(id);
    }
}

module.exports = new BlogCategoryService();
