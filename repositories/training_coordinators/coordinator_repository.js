const { Coordenador, DepartamentoInterno, Curso, Turma } = require('../../models');

class CoordenadorRepository {
  /**
   * Cria um novo coordenador, validando integridade de dados.
   */
  async create(data) {
    try {
      // 🔍 Verifica se o departamento existe
      const departamento = await DepartamentoInterno.findByPk(data.departamento_id);
      if (!departamento) {
        throw new Error('Departamento informado não existe.');
      }

      // 🚫 Verifica duplicidade de e-mail
      const emailExistente = await Coordenador.findOne({ where: { email: data.email } });
      if (emailExistente) {
        throw new Error('Já existe um coordenador com este e-mail.');
      }

      // ✅ Cria e retorna o coordenador completo
      const coordenador = await Coordenador.create(data);
      return await this.findById(coordenador.id);
    } catch (err) {
      throw new Error(`Erro ao criar coordenador: ${err.message}`);
    }
  }

  /**
   * Lista todos os coordenadores com suas relações.
   * Permite filtros dinâmicos (ex: { departamento_id: 2 }).
   */
  async findAll(filters = {}) {
    try {
      return await Coordenador.findAll({
        where: filters,
        include: [
          {
            association: 'departamento',
            attributes: ['id', 'nome'],
          },
          {
            association: 'cursos',
            attributes: ['id', 'nome', 'codigo', 'duracao'],
          },
          {
            association: 'turmas',
            attributes: ['id', 'nome', 'periodo', 'ano_letivo'],
          },
        ],
        order: [['created_at', 'DESC']],
      });
    } catch (err) {
      throw new Error(`Erro ao listar coordenadores: ${err.message}`);
    }
  }

  /**
   * Busca um coordenador específico por ID com todas as relações.
   */
  async findById(id) {
    try {
      const coordenador = await Coordenador.findByPk(id, {
        include: [
          {
            association: 'departamento',
            attributes: ['id', 'nome'],
          },
          {
            association: 'cursos',
            attributes: ['id', 'nome', 'codigo', 'duracao'],
          },
          {
            association: 'turmas',
            attributes: ['id', 'nome', 'periodo', 'ano_letivo'],
          },
        ],
      });

      if (!coordenador) {
        throw new Error(`Coordenador com ID ${id} não encontrado.`);
      }

      return coordenador;
    } catch (err) {
      throw new Error(`Erro ao buscar coordenador: ${err.message}`);
    }
  }

  /**
   * Atualiza dados de um coordenador existente.
   */
  async update(id, data) {
    try {
      const coordenador = await Coordenador.findByPk(id);
      if (!coordenador) throw new Error(`Coordenador com ID ${id} não encontrado.`);

      // 🔍 Valida departamento (se alterado)
      if (data.departamento_id && data.departamento_id !== coordenador.departamento_id) {
        const departamento = await DepartamentoInterno.findByPk(data.departamento_id);
        if (!departamento) {
          throw new Error('Novo departamento informado não existe.');
        }
      }

      // 🚫 Evita duplicidade de e-mail
      if (data.email && data.email !== coordenador.email) {
        const emailExistente = await Coordenador.findOne({ where: { email: data.email } });
        if (emailExistente) {
          throw new Error('Já existe outro coordenador com este e-mail.');
        }
      }

      await coordenador.update(data);
      return await this.findById(id);
    } catch (err) {
      throw new Error(`Erro ao atualizar coordenador: ${err.message}`);
    }
  }

  /**
   * Exclui um coordenador somente se não houver vínculos com cursos ou turmas.
   */
  async delete(id) {
    try {
      const coordenador = await Coordenador.findByPk(id, {
        include: ['cursos', 'turmas'],
      });

      if (!coordenador) {
        throw new Error(`Coordenador com ID ${id} não encontrado.`);
      }

      // 🚫 Bloqueia exclusão se houver vínculos
      if ((coordenador.cursos && coordenador.cursos.length > 0) ||
          (coordenador.turmas && coordenador.turmas.length > 0)) {
        throw new Error('Não é possível excluir um coordenador vinculado a cursos ou turmas.');
      }

      await coordenador.destroy();
      return true;
    } catch (err) {
      throw new Error(`Erro ao excluir coordenador: ${err.message}`);
    }
  }
}

module.exports = new CoordenadorRepository();
