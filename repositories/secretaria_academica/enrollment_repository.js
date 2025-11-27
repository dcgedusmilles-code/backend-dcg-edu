const { Matricula, Aluno, Curso, Turma, InscricaoDisciplina } = require('../../models');

class MatriculaRepository {
    /**
     * Cria uma nova matrícula.
     * Valida se o aluno, curso e turma existem e evita duplicidade.
     */
    async create(data) {
        try {
            // 🔍 Verifica se o aluno existe
            const aluno = await Aluno.findByPk(data.id_aluno);
            if (!aluno) {
                throw new Error('Aluno informado não existe.');
            }

            // 🔍 Verifica se o curso existe
            const curso = await Curso.findByPk(data.id_curso);
            if (!curso) {
                throw new Error('Curso informado não existe.');
            }

            // 🔍 Verifica se a turma existe
            const turma = await Turma.findByPk(data.id_turma);
            if (!turma) {
                throw new Error('Turma informada não existe.');
            }

            // 🚫 Evita matrícula duplicada para o mesmo aluno e curso no mesmo ano
            const duplicada = await Matricula.findOne({
                where: {
                    id_aluno: data.id_aluno,
                    id_curso: data.id_curso,
                    ano_letivo: data.ano_letivo
                }
            });
            if (duplicada) {
                throw new Error('O aluno já possui matrícula neste curso e ano letivo.');
            }

            // ✅ Cria a matrícula
            const matricula = await Matricula.create(data);
            return await this.findById(matricula.id);
        } catch (err) {
            throw new Error(`Erro ao criar matrícula: ${err.message}`);
        }
    }

    /**
     * Lista todas as matrículas com filtros opcionais (ex: curso, turma, status)
     */
    async findAll(filters = {}) {
        try {
            return await Matricula.findAll({
                where: filters,
                include: [
                    { association: 'aluno', attributes: ['id', 'nome', 'email'] },
                    { association: 'curso', attributes: ['id', 'titulo', 'nivel', 'carga_horaria'] },
                    { association: 'turma', attributes: ['id', 'nome','ano', 'semestre'] },
                    {
                        association: 'inscricoes',
                        attributes: ['id', 'disciplina_id', 'status'],
                        include: [{ association: 'disciplina', attributes: ['id', 'nome', 'carga_horaria', 'curso_id'] }]
                    }
                ],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar matrículas: ${err.message}`);
        }
    }

    /**
     * Busca uma matrícula pelo ID com relacionamentos completos.
     */
    async findById(id) {
        try {
            const registro = await Matricula.findByPk(id, {
                include: [
                    { association: 'aluno', attributes: ['id', 'nome', 'email', 'telefone'] },
                    { association: 'curso', attributes: ['id', 'titulo', 'nivel', 'carga_horaria'] },
                    { association: 'turma', attributes: ['id', 'nome','ano', 'semestre'] },
                    {
                        association: 'inscricoes',
                        include: [{ association: 'disciplina', attributes: ['id', 'nome', 'carga_horaria', 'curso_id'] }]
                    }
                ]
            });

            if (!registro) {
                throw new Error(`Matrícula com ID ${id} não encontrada.`);
            }

            return registro;
        } catch (err) {
            throw new Error(`Erro ao buscar matrícula: ${err.message}`);
        }
    }

    /**
     * Atualiza uma matrícula existente.
     */
    async update(id, data) {
        try {
            const registro = await Matricula.findByPk(id);
            if (!registro) {
                throw new Error(`Matrícula com ID ${id} não encontrada.`);
            }

            await registro.update(data);
            return await this.findById(id);
        } catch (err) {
            throw new Error(`Erro ao atualizar matrícula: ${err.message}`);
        }
    }

    /**
     * Exclui uma matrícula, garantindo que não tenha inscrições ativas.
     */
    async delete(id) {
        try {
            const registro = await Matricula.findByPk(id, {
                include: [{ association: 'inscricoes' }]
            });

            if (!registro) {
                throw new Error(`Matrícula com ID ${id} não encontrada.`);
            }

            // 🚫 Impede exclusão se houver disciplinas inscritas
            if (registro.inscricoes && registro.inscricoes.length > 0) {
                throw new Error('Não é possível excluir uma matrícula com disciplinas inscritas.');
            }

            await registro.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir matrícula: ${err.message}`);
        }
    }
}

module.exports = new MatriculaRepository();
