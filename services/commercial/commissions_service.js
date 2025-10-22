const comissaoRepo = require('../../repositories/commercial/commissions_repository');
const vendaRepo = require('../../repositories/commercial/sales_repository'); // opcional

class ComissaoService {
    /**
     * Cria uma nova comissão, com cálculo automático do valor se aplicável.
     */
    async criar(dados) {
        if ((dados.valor === undefined || dados.valor === null) && dados.percentual && dados.id_venda) {
            const venda = await vendaRepo.findById(dados.id_venda);
            if (venda) {
                const totalVenda = venda.valor_total ?? venda.total ?? venda.valor ?? 0;
                dados.valor = totalVenda * (dados.percentual / 100);
            }
        }

        if (dados.percentual == null) throw new Error('Percentual é obrigatório');
        if (dados.id_venda == null) throw new Error('id_venda é obrigatório');
        if (dados.id_funcionario == null) throw new Error('id_funcionario é obrigatório');

        return await comissaoRepo.create(dados);
    }

    /**
     * Lista todas as comissões com filtros opcionais.
     */
    async listar(filtros = {}) {
        return await comissaoRepo.findAll(filtros);
    }

    /**
     * Busca uma comissão pelo ID.
     */
    async buscarPorId(id) {
        const comissao = await comissaoRepo.findById(id);
        if (!comissao) throw new Error('Comissão não encontrada');
        return comissao;
    }

    /**
     * Atualiza uma comissão existente, com regra de negócio para status "pago".
     */
    async atualizar(id, dados) {
        const atual = await comissaoRepo.findById(id);
        if (!atual) throw new Error('Comissão não encontrada');

        if (atual.status === 'pago' && dados.status !== 'pago') {
            throw new Error('Não é permitido alterar uma comissão já paga');
        }

        return await comissaoRepo.update(id, dados);
    }

    /**
     * Remove uma comissão.
     */
    async remover(id) {
        return await comissaoRepo.delete(id);
    }
}

module.exports = new ComissaoService();
