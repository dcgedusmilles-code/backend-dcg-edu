const reservaService = require('../../services/library_resource_center/reservations_service');

class ReservaController {
    async listar(req, res) {
        const reservas = await reservaService.listar();
        res.json(reservas);
    }

    async buscarPorId(req, res) {
        const { id } = req.params;
        const reserva = await reservaService.buscarPorId(id);
        if (!reserva) return res.status(404).json({ message: 'Reserva não encontrada' });
        res.json(reserva);
    }

    async criar(req, res) {
        try {
            const novaReserva = await reservaService.criar(req.body);
            res.status(201).json(novaReserva);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        const { id } = req.params;
        const reservaAtualizada = await reservaService.atualizar(id, req.body);
        if (!reservaAtualizada)
            return res.status(404).json({ message: 'Reserva não encontrada' });
        res.json(reservaAtualizada);
    }

    async remover(req, res) {
        const { id } = req.params;
        const resultado = await reservaService.remover(id);
        if (!resultado) return res.status(404).json({ message: 'Reserva não encontrada' });
        res.status(204).send();
    }
}

module.exports = new ReservaController();
