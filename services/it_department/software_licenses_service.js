const licencaSoftwareRepository = require('../../repositories/it_department/software_licenses_repository');

class LicencaSoftwareService {
    async listarLicencas() {
        return await licencaSoftwareRepository.findAll();
    }

    async obterLicenca(id) {
        const licenca = await licencaSoftwareRepository.findById(id);
        if (!licenca) throw new Error('Licença não encontrada');
        return licenca;
    }

    async criarLicenca(data) {
        return await licencaSoftwareRepository.create(data);
    }

    async atualizarLicenca(id, data) {
        const licenca = await licencaSoftwareRepository.update(id, data);
        if (!licenca) throw new Error('Licença não encontrada');
        return licenca;
    }

    async excluirLicenca(id) {
        const sucesso = await licencaSoftwareRepository.delete(id);
        if (!sucesso) throw new Error('Licença não encontrada');
        return true;
    }
}

module.exports = new LicencaSoftwareService();
