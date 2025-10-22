const { 
    Funcionario, 
    Cargo, 
    ContratoTrabalho, 
    FolhaPagamento, 
    Ferias, 
    ParticipacaoTreinamento, 
    AvaliacaoDesempenho, 
    AdvertenciaDisciplina 
} = require('../../models');

class FuncionarioRepository {
    async create(data) {
        try {
            return await Funcionario.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar funcionário: ${err.message}`);
        }
    }

    async findAll(filters = {}) {
        try {
            return await Funcionario.findAll({
                where: filters,
                include: [
                    { model: Cargo, as: 'cargo' },
                    { model: ContratoTrabalho, as: 'contratos' },
                    { model: FolhaPagamento, as: 'folhas' },
                    { model: Ferias, as: 'ferias' },
                    { model: ParticipacaoTreinamento, as: 'treinamentos' },
                    { model: AvaliacaoDesempenho, as: 'avaliacoes' },
                    { model: AdvertenciaDisciplina, as: 'advertencias' }
                ],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar funcionários: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await Funcionario.findByPk(id, {
                include: [
                    { model: Cargo, as: 'cargo' },
                    { model: ContratoTrabalho, as: 'contratos' },
                    { model: FolhaPagamento, as: 'folhas' },
                    { model: Ferias, as: 'ferias' },
                    { model: ParticipacaoTreinamento, as: 'treinamentos' },
                    { model: AvaliacaoDesempenho, as: 'avaliacoes' },
                    { model: AdvertenciaDisciplina, as: 'advertencias' }
                ]
            });
        } catch (err) {
            throw new Error(`Erro ao buscar funcionário: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const funcionario = await Funcionario.findByPk(id);
            if (!funcionario) return null;

            await funcionario.update(data);
            return funcionario;
        } catch (err) {
            throw new Error(`Erro ao atualizar funcionário: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const funcionario = await Funcionario.findByPk(id);
            if (!funcionario) return null;

            await funcionario.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir funcionário: ${err.message}`);
        }
    }
}

module.exports = new FuncionarioRepository();
