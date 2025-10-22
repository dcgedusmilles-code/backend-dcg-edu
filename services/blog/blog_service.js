const blogRepo = require('../../repositories/blog/blog_repository');

class BlogService {
    async listar() {
        return await blogRepo.findAll();
    }

    async buscarPorId(id) {
        return await blogRepo.findById(id);
    }

    async criar(dados) {
        return await blogRepo.create(dados);
    }

    async atualizar(id, dados) {
        return await blogRepo.update(id, dados);
    }

    async remover(id) {
        return await blogRepo.delete(id);
    }
}

module.exports = new BlogService();
