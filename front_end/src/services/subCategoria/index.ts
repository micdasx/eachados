import { api } from "../configuration";
import { ISubCategoria } from "./interface";

export class SubCategoriaService {
  baseURL: string;

  constructor() {
    this.baseURL = "/subcategoria";
  }

  async getByCategory(categoryID: number): Promise<ISubCategoria[]> {
    const response = api.get(
      this.baseURL + "/allfrom?categoryId=" + categoryID
    );

    console.log("[ GET | SUBCATEGORIA ]" + response);

    return [];
  }
}
