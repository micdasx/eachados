import { api } from "../configuration";
import { ICor } from "./interface";

export class CorService {
  baseURL: string;

  constructor() {
    this.baseURL = "/cor";
  }

  async getAll(): Promise<ICor[]> {
    const response = api.get(this.baseURL + "/all");
    console.log(response);

    return [];
  }
}
