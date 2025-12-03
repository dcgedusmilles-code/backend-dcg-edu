const receitaRepo = require("../../repositories/financeiro/receita_repository");
const despesaRepo = require("../../repositories/financeiro/despesa_repository");
const contaReceberRepo = require("../../repositories/financeiro/conta_receber_repository");
const contaPagarRepo = require("../../repositories/financeiro/conta_pagar_repository");

class RelatorioFinanceiroService {
  /**
   * Gera o relatório financeiro para um período e filtros opcionais.
   * filtro: { unidade_id, curso_id }
   * periodo: { periodo_inicio: 'YYYY-MM-DD', periodo_fim: 'YYYY-MM-DD' }
   */
  async gerar({
    periodo_inicio,
    periodo_fim,
    unidade_id = null,
    curso_id = null,
  }) {
    if (!periodo_inicio || !periodo_fim) {
      throw new Error("Período (periodo_inicio e periodo_fim) é obrigatório");
    }

    const filter = {};
    if (unidade_id) filter.unidade_id = unidade_id;
    if (curso_id) filter.curso_id = curso_id;

    // Executa agregações em paralelo
    const [
      totalReceitas,
      totalDespesas,
      contasReceberPendentes,
      contasPagarPendentes,
      listaReceitas,
      listaDespesas,
      listaContasReceber,
      listaContasPagar,
      contasReceberVencidas,
      contasPagarVencidas,
    ] = await Promise.all([
      receitaRepo.sumByPeriod(periodo_inicio, periodo_fim, filter),
      despesaRepo.sumByPeriod(periodo_inicio, periodo_fim, filter),
      contaReceberRepo.sumPending(periodo_inicio, periodo_fim, filter),
      contaPagarRepo.sumPending(periodo_inicio, periodo_fim, filter),
      receitaRepo.findList(periodo_inicio, periodo_fim, filter),
      despesaRepo.findList(periodo_inicio, periodo_fim, filter),
      contaReceberRepo.findList(periodo_inicio, periodo_fim, filter),
      contaPagarRepo.findList(periodo_inicio, periodo_fim, filter),
      contaReceberRepo.findOverdue(filter),
      contaPagarRepo.findOverdue(filter),
    ]);

    const lucro =
      parseFloat(totalReceitas || 0) - parseFloat(totalDespesas || 0);
    const margem = totalReceitas > 0 ? (lucro / totalReceitas) * 100 : 0;

    // Estrutura JSON para o frontend (dashboard)
    const result = {
      periodo: {
        inicio: periodo_inicio,
        fim: periodo_fim,
      },
      kpis: {
        receita_total: parseFloat(totalReceitas || 0),
        despesas_totais: parseFloat(totalDespesas || 0),
        lucro: parseFloat(lucro.toFixed(2)),
        margem_lucro_percentual: parseFloat(margem.toFixed(2)),
        contas_receber_pendentes: parseFloat(contasReceberPendentes || 0),
        contas_pagar_pendentes: parseFloat(contasPagarPendentes || 0),
      },
      detalhes: {
        receitas: listaReceitas,
        despesas: listaDespesas,
        contas_receber: listaContasReceber,
        contas_pagar: listaContasPagar,
      },
      inadimplencia: {
        contas_receber_vencidas: contasReceberVencidas,
        contas_pagar_vencidas: contasPagarVencidas,
      },
      metadados: {
        unidade_id: unidade_id || null,
        curso_id: curso_id || null,
      },
      gerado_em: new Date().toISOString(),
    };

    return result;
  }
}

module.exports = new RelatorioFinanceiroService();
