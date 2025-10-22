const BlogService = require('../../../services/blog/blog_service');
const { Blog } = require('../../../models');

jest.mock('../../../models', () => ({
  Blog: {
    findAll: jest.fn(),
    findByPk: jest.fn(),
    create: jest.fn(),
  }
}));

describe('BlogService - Unit Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar todos os blogs', async () => {
    Blog.findAll.mockResolvedValue([{ id: 1, titulo: 'Teste' }]);

    const result = await BlogService.getAll();
    expect(result).toHaveLength(1);
    expect(result[0].titulo).toBe('Teste');
    expect(Blog.findAll).toHaveBeenCalled();
  });

  it('deve retornar blog pelo id', async () => {
    Blog.findByPk.mockResolvedValue({ id: 1, titulo: 'Unit Test' });

    const result = await BlogService.getById(1);
    expect(result).toBeDefined();
    expect(result.titulo).toBe('Unit Test');
    expect(Blog.findByPk).toHaveBeenCalledWith(1, { include: ['category', 'autor'] });
  });

  it('deve criar um novo blog', async () => {
    Blog.create.mockResolvedValue({ id: 1, titulo: 'Novo Blog' });

    const result = await BlogService.create({ titulo: 'Novo Blog' });
    expect(result.titulo).toBe('Novo Blog');
    expect(Blog.create).toHaveBeenCalledWith({ titulo: 'Novo Blog' });
  });
});
