const BlogCategoryService = require('../../../services/blog/blog_category_service');
const { BlogCategory } = require('../../../models');

jest.mock('../../../models', () => ({
    BlogCategory: {
        findAll: jest.fn(),
        findByPk: jest.fn(),
        create: jest.fn(),
    }
}));

describe('BlogCategoryService - Unit Tests', () => {
    beforeEach(() => jest.clearAllMocks());

    it('deve retornar todas as categorias', async () => {
        BlogCategory.findAll.mockResolvedValue([{ id: 1, nome: 'Tech' }]);

        const result = await BlogCategoryService.getAll();
        expect(result).toHaveLength(1);
        expect(result[0].nome).toBe('Tech');
        expect(BlogCategory.findAll).toHaveBeenCalled();
    });

    it('deve retornar uma categoria pelo id', async () => {
        BlogCategory.findByPk.mockResolvedValue({ id: 1, nome: 'Educação' });

        const result = await BlogCategoryService.getById(1);
        expect(result).toBeDefined();
        expect(result.nome).toBe('Educação');
        expect(BlogCategory.findByPk).toHaveBeenCalledWith(1, { include: ['posts'] });
    });

    it('deve criar uma nova categoria', async () => {
        BlogCategory.create.mockResolvedValue({ id: 1, nome: 'Inovação' });

        const result = await BlogCategoryService.create({ nome: 'Inovação' });
        expect(result.nome).toBe('Inovação');
        expect(BlogCategory.create).toHaveBeenCalledWith({ nome: 'Inovação' });
    });
});
