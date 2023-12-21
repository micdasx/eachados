import { ITipoContato } from "../tipoContato/interface";

export interface IUsuario {
  id: number;
  nome: string;
  nick: string;
  biografia?: string;

  contato: string;

  idTipoContato: number;
  tipoContato?: ITipoContato;
}
