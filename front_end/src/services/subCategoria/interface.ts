import { ICategoria } from "../categoria/interface";

export interface ISubCategoria {
  id: number;
  descricao: string;

  idCategoria: number;
  categoria?: ICategoria;
}
