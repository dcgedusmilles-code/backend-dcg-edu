const { InscricaoDisciplina, Matricula, Disciplina } = require('../../models');

class InscricaoDisciplinaRepository {
    /**
     * Cria uma nova inscrição de disciplina.
     * Valida se matrícula e disciplina existem antes de criar.
     */
    async create(data) {
        try {
            // 🔍 Verifica se a matrícula existe
            const matricula = await Matricula.findByPk(data.id_matricula);
            if (!matricula) {
                throw new Error('Matrícula informada não existe.');
            }

            // 🔍 Verifica se a disciplina existe
            const disciplina = await Disciplina.findByPk(data.id_disciplina);
            if (!disciplina) {
                throw new Error('Disciplina informada não existe.');
            }

            // 🚫 Evita duplicidade: mesma matrícula na mesma disciplina
            const existente = await InscricaoDisciplina.findOne({
                where: { id_matricula: data.id_matricula, id_disciplina: data.id_disciplina }
            });
            if (existente) {
                throw new Error('O aluno já está inscrito nesta disciplina.');
            }

            // 🆕 Cria a inscrição
            const novaInscricao = await InscricaoDisciplina.create(data);
            return await this.findById(novaInscricao.id); // retorna com os relacionamentos
        } catch (err) {
            throw new Error(`Erro ao criar inscrição de disciplina: ${err.message}`);
        }
    }

    /**
     * Lista todas as inscrições com filtros opcionais.
     * Exemplo: findAll({ id_matricula: 10, status: 'ativa' })
     */
    async findAll(filters = {}) {
        try {
            return await InscricaoDisciplina.findAll({
                where: filters,
                include: [
                    { association: 'matricula', attributes: ['id', 'ano_letivo', 'status'] },
                    { association: 'disciplina', attributes: ['id', 'nome', 'codigo', 'carga_horaria'] }
                ],
                order: [['created_at', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar inscrições de disciplinas: ${err.message}`);
        }
    }

    /**
     * Busca uma inscrição de disciplina pelo ID.
     */
    async findById(id) {
        try {
            const registro = await InscricaoDisciplina.findByPk(id, {
                include: [
                    { association: 'matricula', attributes: ['id', 'ano_letivo', 'status'] },
                    { association: 'disciplina', attributes: ['id', 'nome', 'codigo', 'carga_horaria'] }
                ]
            });

            if (!registro) {
                throw new Error(`Inscrição com ID ${id} não encontrada.`);
            }

            return registro;
        } catch (err) {
            throw new Error(`Erro ao buscar inscrição de disciplina: ${err.message}`);
        }
    }

    /**
     * Atualiza uma inscrição existente.
     */
    async update(id, data) {
        try {
            const registro = await InscricaoDisciplina.findByPk(id);
            if (!registro) {
                throw new Error(`Inscrição com ID ${id} não encontrada.`);
            }

            await registro.update(data);
            return await this.findById(id);
        } catch (err) {
            throw new Error(`Erro ao atualizar inscrição de disciplina: ${err.message}`);
        }
    }

    /**
     * Exclui uma inscrição de disciplina.
     */
    async delete(id) {
        try {
            const registro = await InscricaoDisciplina.findByPk(id);
            if (!registro) {
                throw new Error(`Inscrição com ID ${id} não encontrada.`);
            }

            await registro.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir inscrição de disciplina: ${err.message}`);
        }
    }
}

module.exports = new InscricaoDisciplinaRepository();
