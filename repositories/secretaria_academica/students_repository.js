const {
  Aluno,
  Matricula,
  HistoricoAcademico,
  DocumentoAcademico,
  Transferencia,
  Protocolo,
  AgendamentoAtendimento,
  Encarregado,
} = require("../../models");

class AlunoRepository {
  async create(data) {
    return await Aluno.create(data);
  }

  async findAll() {
    return await Aluno.findAll({
      include: [
        { model: Matricula, as: "matriculas" },
        { model: HistoricoAcademico, as: "historicos" },
        { model: DocumentoAcademico, as: "documentos" },
        { model: Transferencia, as: "transferencias" },
        { model: Protocolo, as: "protocolos" },
        { model: AgendamentoAtendimento, as: "agendamentos" },
        {
          model: Encarregado,
          as: "encarregados",
          through: { attributes: [] }, // oculta dados da tabela pivô
        },
      ],
      order: [["id", "DESC"]],
    });
  }

  async findById(id) {
    return await Aluno.findByPk(id, {
      include: [
        { model: Matricula, as: "matriculas" },
        { model: HistoricoAcademico, as: "historicos" },
        { model: DocumentoAcademico, as: "documentos" },
        { model: Transferencia, as: "transferencias" },
        { model: Protocolo, as: "protocolos" },
        { model: AgendamentoAtendimento, as: "agendamentos" },
        {
          model: Encarregado,
          as: "encarregados",
          through: { attributes: [] },
        },
      ],
    });
  }

  async update(id, data) {
    const aluno = await Aluno.findByPk(id);
    if (!aluno) return null;
    return await aluno.update(data);
  }

  async delete(id) {
    const aluno = await Aluno.findByPk(id);
    if (!aluno) return null;
    await aluno.destroy();
    return true;
  }
}

module.exports = new AlunoRepository();
