import { api } from "../configuration";
import { ILocal } from "./interface";

export class LocalService {
  baseURL: string;

  constructor() {
    this.baseURL = "/local";
  }

  async getAll(): Promise<ILocal[]> {
    const response = api.get(this.baseURL + "/all");

    console.log("[ GET | LOCAL ]" + response);

    return [];
  }
}
