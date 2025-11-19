import { GeographyRepository } from "../../repositories/user/geography.repository";

export class GeographyService {
  constructor() {
    this.repo = new GeographyRepository();
  }

  async listarProvincias() {
    return await this.repo.getProvincias();
  }

  async listarMunicipios(provincia) {
    if (!provincia) throw new Error("A província é obrigatória");
    return await this.repo.getMunicipios(provincia);
  }
}
