import { api } from "../configuration";
import { ICategoria } from "./interface";

export class CategoriaService {
  baseURL: string;

  constructor() {
    this.baseURL = "/categoria";
  }

  async getAll(): Promise<ICategoria[]> {
    const response = api.get(this.baseURL + "/all");

    console.log("[ GET | CATEGORIA ]" + response);

    return [];
  }
}
