import { api } from "../configuration";
import { IObjeto } from "./interface";

export class ObjetoService {
  baseURL: string;

  constructor() {
    this.baseURL = "/objetoperdido";
  }

  async createLostObject(object: IObjeto): Promise<boolean> {
    const response = api.post(this.baseURL + "/new", object);
    /**
     * ENVIAR IMAGEM
     */

    console.log("[ POST | OBJETO PERDIDO ]" + response);

    return true;
  }

  async addImageToObject(image: {
    image: string;
    fileName: string;
    objId: string;
  }): Promise<boolean> {
    const response = api.post(this.baseURL + "/image", image);

    console.log("[ POST | OBJETO PERDIDO IMAGEM ]" + response);

    return true;
  }
}
