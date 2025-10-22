'use strict';

const certificadoService = require('../../services/avaliacao_certicacao/certificates_service');

class CertificadoController {
    /**
     * Lista todos os certificados
     */
    async listar(req, res) {
        try {
            const filtros = req.query || {};
            const certificados = await certificadoService.getAll(filtros);
            res.json(certificados);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca um certificado pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const certificado = await certificadoService.getById(req.params.id);
            if (!certificado) {
                return res.status(404).json({ message: 'Certificado não encontrado' });
            }
            res.json(certificado);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria um novo certificado
     */
    async criar(req, res) {
        try {
            const certificado = await certificadoService.create(req.body);
            res.status(201).json(certificado);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza um certificado existente
     */
    async atualizar(req, res) {
        try {
            const certificado = await certificadoService.update(req.params.id, req.body);
            if (!certificado) {
                return res.status(404).json({ message: 'Certificado não encontrado' });
            }
            res.json(certificado);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove um certificado
     */
    async remover(req, res) {
        try {
            const deleted = await certificadoService.delete(req.params.id);
            if (!deleted) {
                return res.status(404).json({ message: 'Certificado não encontrado' });
            }
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new CertificadoController();
