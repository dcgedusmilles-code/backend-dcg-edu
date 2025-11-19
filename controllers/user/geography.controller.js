import { GeographyService } from "../../services/user/geography.service";

const service = new GeographyService();

export class GeographyController {
  
  async provincias(req, res) {
    try {
      const data = await service.listarProvincias();
      res.setHeader("Access-Control-Allow-Origin", "*"); // 🔥 resolve CORS no frontend
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async municipios(req, res) {
    try {
      const { provincia } = req.query;
      const data = await service.listarMunicipios(provincia);

      res.setHeader("Access-Control-Allow-Origin", "*"); // 🔥 resolve CORS
      return res.json(data);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
