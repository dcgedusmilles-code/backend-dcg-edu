const relatorioService = require("../../services/financeiro/relatorio_financeiro_service");

/**
 * @swagger
 * tags:
 *   - name: RelatorioFinanceiro
 *     description: Endpoints para geração de relatórios financeiros
 */

/**
 * @swagger
 * /api/relatorios/financeiro:
 *   post:
 *     tags: [RelatorioFinanceiro]
 *     summary: Gera o relatório financeiro para o período e filtros informados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               periodo_inicio:
 *                 type: string
 *                 format: date
 *               periodo_fim:
 *                 type: string
 *                 format: date
 *               unidade_id:
 *                 type: integer
 *               curso_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Relatório financeiro gerado
 */
exports.gerar = async (req, res) => {
  try {
    const payload = {
      periodo_inicio: req.body.periodo_inicio,
      periodo_fim: req.body.periodo_fim,
      unidade_id: req.body.unidade_id,
      curso_id: req.body.curso_id,
    };

    const relatorio = await relatorioService.gerar(payload);
    return res.status(200).json(relatorio);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
