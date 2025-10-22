const { LicencaSoftware } = require('../../models');

class LicencaSoftwareRepository {
    async findAll() {
        return await LicencaSoftware.findAll();
    }

    async findById(id) {
        return await LicencaSoftware.findByPk(id);
    }

    async create(data) {
        return await LicencaSoftware.create(data);
    }

    async update(id, data) {
        const licenca = await LicencaSoftware.findByPk(id);
        if (!licenca) return null;
        return await licenca.update(data);
    }

    async delete(id) {
        const licenca = await LicencaSoftware.findByPk(id);
        if (!licenca) return null;
        await licenca.destroy();
        return true;
    }
}

module.exports = new LicencaSoftwareRepository();
