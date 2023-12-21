import { ICategoria } from "../categoria/interface";
import { ICor } from "../cor/interface";
import { ILocal } from "../local/interface";

export interface IObjeto {
  id: number;
  descricao: string;
  deletado?: boolean;
  recuperado?: boolean;
  s3Image?: string;
  porcentagem: string;

  idCor: number;
  cor?: ICor;

  idCategoria: number;
  categoria?: ICategoria;

  idLocal: number;
  local?: ILocal;

  idSublocal: number;
  sublocal?: any;

  idPiso: number;
  piso?: any;

  idUsuario: number;
  usuario?: any;
}
