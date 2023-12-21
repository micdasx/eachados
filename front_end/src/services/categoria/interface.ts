import { ISubCategoria } from "../subCategoria/interface";

export interface ICategoria {
  id: number;
  descricao: string;
  imagePath: string;

  subcategorias?: ISubCategoria[];
}
