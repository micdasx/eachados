import { api } from "../configuration";
import { IPiso } from "./interface";

export class PisoService {
  baseURL: string;

  constructor() {
    this.baseURL = "/pisos";
  }

  async getAll(): Promise<IPiso[]> {
    const response = api.get(this.baseURL + "/all");

    console.log("[ GET | PISOS ]" + response);

    return [];
  }
}
