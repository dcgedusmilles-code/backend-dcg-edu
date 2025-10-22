'use strict';
const { Estagio, Aluno, EmpresaParceira, Funcionario, SupervisorEmpresa, RelatorioEstagio, AvaliacaoEstagio } = require('../../models');

class EstagioRepository {
    async create(data) {
        return await Estagio.create(data);
    }

    async findAll() {
        return await Estagio.findAll({
            include: [
                { model: Aluno, as: 'estudante' },
                { model: EmpresaParceira, as: 'empresa' },
                { model: Funcionario, as: 'supervisorInterno' },
                { model: SupervisorEmpresa, as: 'supervisorExterno' },
                { model: RelatorioEstagio, as: 'relatorios' },
                { model: AvaliacaoEstagio, as: 'avaliacoes' }
            ]
        });
    }

    async findById(id) {
        return await Estagio.findByPk(id, {
            include: [
                { model: Aluno, as: 'estudante' },
                { model: EmpresaParceira, as: 'empresa' },
                { model: Funcionario, as: 'supervisorInterno' },
                { model: SupervisorEmpresa, as: 'supervisorExterno' },
                { model: RelatorioEstagio, as: 'relatorios' },
                { model: AvaliacaoEstagio, as: 'avaliacoes' }
            ]
        });
    }

    async update(id, data) {
        const estagio = await Estagio.findByPk(id);
        if (!estagio) return null;
        await estagio.update(data);
        return estagio;
    }

    async delete(id) {
        const estagio = await Estagio.findByPk(id);
        if (!estagio) return null;
        await estagio.destroy();
        return true;
    }
}

module.exports = new EstagioRepository();
