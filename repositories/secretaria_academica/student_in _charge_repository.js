// src/repositories/studentInChargeRepository.js
const { AlunoEncarregado, Aluno, Encarregado } = require('../../models');

class StudentInChargeRepository {
  async findAll() {
    return await AlunoEncarregado.findAll({
      include: [
        { model: Aluno, as: 'aluno', attributes: ['id', 'nome', 'email', 'telefone', 'documento'] },
        { model: Encarregado, as: 'encarregado', attributes: ['id', 'nome', 'email', 'telefone', 'parentesco'] },
      ],
    });
  }

  async findByAlunoId(aluno_id) {
    return await AlunoEncarregado.findOne({
      where: { aluno_id },
      include: [
        { model: Aluno, as: 'aluno' },
        { model: Encarregado, as: 'encarregado' },
      ],
    });
  }
}

module.exports = new StudentInChargeRepository();
