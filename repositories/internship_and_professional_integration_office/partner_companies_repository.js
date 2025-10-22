'use strict';
const { EmpresaParceira, VagaEstagio, SupervisorEmpresa, RelacaoEmpresa, ProgramaEmpregabilidade } = require('../../models');

class EmpresaParceiraRepository {
    async create(data) {
        return await EmpresaParceira.create(data);
    }

    async findAll() {
        return await EmpresaParceira.findAll({
            include: [
                { model: VagaEstagio, as: 'vagas' },
                { model: SupervisorEmpresa, as: 'supervisores' },
                { model: RelacaoEmpresa, as: 'relacoes' },
                { model: ProgramaEmpregabilidade, as: 'programas' }
            ]
        });
    }

    async findById(id) {
        return await EmpresaParceira.findByPk(id, {
            include: [
                { model: VagaEstagio, as: 'vagas' },
                { model: SupervisorEmpresa, as: 'supervisores' },
                { model: RelacaoEmpresa, as: 'relacoes' },
                { model: ProgramaEmpregabilidade, as: 'programas' }
            ]
        });
    }

    async update(id, data) {
        const empresa = await EmpresaParceira.findByPk(id);
        if (!empresa) return null;
        await empresa.update(data);
        return empresa;
    }

    async delete(id) {
        const empresa = await EmpresaParceira.findByPk(id);
        if (!empresa) return null;
        await empresa.destroy();
        return true;
    }
}

module.exports = new EmpresaParceiraRepository();
