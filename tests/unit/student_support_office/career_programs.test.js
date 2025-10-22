const programaCarreiraService = require('../../../services/student_support_office/career_programs_service');
const programaCarreiraRepository = require('../../../repositories/student_support_office/career_programs_repository');

jest.mock('../../../repositories/student_support_office/career_programs_repository');

describe('ProgramaCarreiraService', () => {
    it('deve criar um programa de carreira', async () => {
        const mockData = { nome: 'Mentoria TI', tipo: 'Mentoria' };
        programaCarreiraRepository.create.mockResolvedValue(mockData);

        const result = await programaCarreiraService.create(mockData);
        expect(result).toEqual(mockData);
    });

    it('deve lançar erro ao não encontrar programa', async () => {
        programaCarreiraRepository.findById.mockResolvedValue(null);
        await expect(programaCarreiraService.getById(999)).rejects.toThrow('Programa de Carreira não encontrado');
    });
});
