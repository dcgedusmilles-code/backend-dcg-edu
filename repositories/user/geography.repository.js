import axios from "axios";
require('dotenv').config();


const BASE_URL = process.env.BASE_URL_ANGOLA_API

export class GeographyRepository {

  async getProvincias() {
    const response = await axios.get(`${BASE_URL}/provinces`);
    return response.data;
  }

  async getMunicipios(provincia) {
    const response = await axios.get(`${BASE_URL}/county?provincia=${provincia}`);
    return response.data;
  }
}
