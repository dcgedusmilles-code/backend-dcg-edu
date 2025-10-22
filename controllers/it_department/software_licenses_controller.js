const licencaSoftwareService = require('../../services/it_department/software_licenses_service');

class LicencaSoftwareController {
    async listar(req, res) {
        try {
            const licencas = await licencaSoftwareService.listarLicencas();
            res.status(200).json(licencas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obter(req, res) {
        try {
            const licenca = await licencaSoftwareService.obterLicenca(req.params.id);
            res.status(200).json(licenca);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async criar(req, res) {
        try {
            const nova = await licencaSoftwareService.criarLicenca(req.body);
            res.status(201).json(nova);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizada = await licencaSoftwareService.atualizarLicenca(req.params.id, req.body);
            res.status(200).json(atualizada);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async excluir(req, res) {
        try {
            await licencaSoftwareService.excluirLicenca(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new LicencaSoftwareController();
