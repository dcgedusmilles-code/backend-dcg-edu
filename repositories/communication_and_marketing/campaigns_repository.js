const { Campanha, CanalDivulgacao, MetricaMarketing } = require('../../models');

class CampanhaRepository {
  async create(data) {
    return await Campanha.create(data);
  }

  async findAll() {
    return await Campanha.findAll({
      include: [
        { model: CanalDivulgacao, as: 'canais' },
        { model: MetricaMarketing, as: 'metricas' }
      ]
    });
  }

  async findById(id) {
    return await Campanha.findByPk(id, {
      include: [
        { model: CanalDivulgacao, as: 'canais' },
        { model: MetricaMarketing, as: 'metricas' }
      ]
    });
  }

  async update(id, data) {
    const campanha = await Campanha.findByPk(id);
    if (!campanha) return null;
    return await campanha.update(data);
  }

  async delete(id) {
    return await Campanha.destroy({ where: { id } });
  }
}

module.exports = new CampanhaRepository();
