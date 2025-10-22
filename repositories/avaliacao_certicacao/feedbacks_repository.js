const { Feedback } = require('../../models');

class FeedbackRepository {
    async findAll() {
        return await Feedback.findAll({
            include: ['avaliacao', 'participante', 'curso', 'instrutor']
        });
    }

    async findById(id) {
        return await Feedback.findByPk(id, {
            include: ['avaliacao', 'participante', 'curso', 'instrutor']
        });
    }

    async create(data) {
        return await Feedback.create(data);
    }

    async update(id, data) {
        const feedback = await Feedback.findByPk(id);
        if (!feedback) return null;
        return await feedback.update(data);
    }

    async delete(id) {
        return await Feedback.destroy({ where: { id } });
    }
}

module.exports = new FeedbackRepository();
