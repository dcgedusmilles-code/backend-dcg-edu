const { AgendamentoAtendimento, Aluno, FuncionarioSecretaria } = require('../../models');

class AgendamentoAtendimentoRepository {
    /**
     * Cria um novo agendamento de atendimento.
     * Valida se aluno e funcionário existem antes da criação.
     */
    async create(data) {
        try {
            // 🔍 Validação de entidades relacionadas
            const aluno = await Aluno.findByPk(data.id_aluno);
            if (!aluno) {
                throw new Error('Aluno informado não existe.');
            }

            const funcionario = await FuncionarioSecretaria.findByPk(data.id_funcionario);
            if (!funcionario) {
                throw new Error('Funcionário informado não existe.');
            }

            // 🆕 Criação do registro
            const novoAgendamento = await AgendamentoAtendimento.create(data);
            return await this.findById(novoAgendamento.id); // Retorna já com os relacionamentos
        } catch (err) {
            throw new Error(`Erro ao criar agendamento: ${err.message}`);
        }
    }

    /**
     * Lista todos os agendamentos, com filtros opcionais.
     * Exemplo: findAll({ status: 'pendente', id_aluno: 1 })
     */
    async findAll(filters = {}) {
        try {
            return await AgendamentoAtendimento.findAll({
                where: filters,
                include: [
                    { association: 'aluno', attributes: ['id', 'nome', 'email', 'telefone'] },
                    { association: 'funcionario', attributes: ['id', 'nome', 'cargo'] }
                ],
                order: [['data_agendamento', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar agendamentos: ${err.message}`);
        }
    }

    /**
     * Busca um agendamento pelo ID, com relações incluídas.
     */
    async findById(id) {
        try {
            const registro = await AgendamentoAtendimento.findByPk(id, {
                include: [
                    { association: 'aluno', attributes: ['id', 'nome', 'email', 'telefone'] },
                    { association: 'funcionario', attributes: ['id', 'nome', 'cargo'] }
                ]
            });

            if (!registro) {
                throw new Error(`Agendamento com ID ${id} não encontrado.`);
            }

            return registro;
        } catch (err) {
            throw new Error(`Erro ao buscar agendamento: ${err.message}`);
        }
    }

    /**
     * Atualiza um agendamento existente.
     */
    async update(id, data) {
        try {
            const registro = await AgendamentoAtendimento.findByPk(id);
            if (!registro) {
                throw new Error(`Agendamento com ID ${id} não encontrado.`);
            }

            await registro.update(data);
            return await this.findById(id);
        } catch (err) {
            throw new Error(`Erro ao atualizar agendamento: ${err.message}`);
        }
    }

    /**
     * Exclui um agendamento de atendimento.
     */
    async delete(id) {
        try {
            const registro = await AgendamentoAtendimento.findByPk(id);
            if (!registro) {
                throw new Error(`Agendamento com ID ${id} não encontrado.`);
            }

            await registro.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir agendamento: ${err.message}`);
        }
    }
}

module.exports = new AgendamentoAtendimentoRepository();
