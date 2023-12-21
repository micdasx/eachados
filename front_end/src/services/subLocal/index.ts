import { api } from "../configuration";
import { ISubLocal } from "./interface";

export class CategoriaService {
  baseURL: string;

  constructor() {
    this.baseURL = "/sublocal";
  }

  async getAll(): Promise<ISubLocal[]> {
    const response = api.get(this.baseURL + "/all");

    console.log("[ GET | SUBLOCAL ]" + response);

    return [];
  }
}
