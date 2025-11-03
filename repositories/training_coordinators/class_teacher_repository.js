const { Turma, Curso, Coordenador, Matricula } = require('../../models');

class TurmaRepository {
    /**
     * Cria uma nova turma.
     * Valida se o curso e o coordenador existem e impede duplicidade de código ou nome.
     */
    async create(data) {
        try {
            // 🔍 Verifica se o curso existe
            const curso = await Curso.findByPk(data.id_curso);
            if (!curso) throw new Error('Curso informado não existe.');

            // 🔍 Verifica se o coordenador existe (se fornecido)
            if (data.id_coordenador) {
                const coordenador = await Coordenador.findByPk(data.id_coordenador);
                if (!coordenador) throw new Error('Coordenador informado não existe.');
            }

            // 🚫 Evita duplicidade (mesmo nome/código dentro do mesmo curso e período)
            const duplicada = await Turma.findOne({
                where: {
                    nome: data.nome,
                    id_curso: data.id_curso,
                    periodo: data.periodo
                }
            });
            if (duplicada) throw new Error('Já existe uma turma com este nome para o mesmo curso e período.');

            // ✅ Cria a turma
            const turma = await Turma.create(data);
            return await this.findById(turma.id);
        } catch (err) {
            throw new Error(`Erro ao criar turma: ${err.message}`);
        }
    }

    /**
     * Lista todas as turmas com filtros opcionais (ex: curso, coordenador, período)
     */
    async findAll(filters = {}) {
        try {
            return await Turma.findAll({
                where: filters,
                include: [
                    { association: 'curso', attributes: ['id', 'nome', 'codigo', 'duracao'] },
                    { association: 'coordenador', attributes: ['id', 'nome', 'email'] },
                ],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar turmas: ${err.message}`);
        }
    }

    /**
     * Busca uma turma pelo ID com detalhes de curso, coordenador e matrículas.
     */
    async findById(id) {
        try {
            const turma = await Turma.findByPk(id, {
                include: [
                    { association: 'curso', attributes: ['id', 'nome', 'codigo', 'duracao'] },
                    { association: 'coordenador', attributes: ['id', 'nome', 'email'] },
                    {
                        association: 'matriculas',
                        attributes: ['id', 'id_aluno', 'status', 'ano_letivo'],
                        include: [{ association: 'aluno', attributes: ['id', 'nome', 'email'] }]
                    }
                ]
            });

            if (!turma) throw new Error(`Turma com ID ${id} não encontrada.`);
            return turma;
        } catch (err) {
            throw new Error(`Erro ao buscar turma: ${err.message}`);
        }
    }

    /**
     * Atualiza uma turma existente.
     */
    async update(id, data) {
        try {
            const turma = await Turma.findByPk(id);
            if (!turma) throw new Error(`Turma com ID ${id} não encontrada.`);

            // Se mudar o curso ou coordenador, validar novamente
            if (data.id_curso && data.id_curso !== turma.id_curso) {
                const curso = await Curso.findByPk(data.id_curso);
                if (!curso) throw new Error('Novo curso informado não existe.');
            }

            if (data.id_coordenador && data.id_coordenador !== turma.id_coordenador) {
                const coordenador = await Coordenador.findByPk(data.id_coordenador);
                if (!coordenador) throw new Error('Novo coordenador informado não existe.');
            }

            await turma.update(data);
            return await this.findById(id);
        } catch (err) {
            throw new Error(`Erro ao atualizar turma: ${err.message}`);
        }
    }

    /**
     * Exclui uma turma apenas se não houver matrículas associadas.
     */
    async delete(id) {
        try {
            const turma = await Turma.findByPk(id, {
                include: [{ association: 'matriculas' }]
            });

            if (!turma) throw new Error(`Turma com ID ${id} não encontrada.`);

            if (turma.matriculas && turma.matriculas.length > 0) {
                throw new Error('Não é possível excluir uma turma com matrículas associadas.');
            }

            await turma.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir turma: ${err.message}`);
        }
    }
}

module.exports = new TurmaRepository();
