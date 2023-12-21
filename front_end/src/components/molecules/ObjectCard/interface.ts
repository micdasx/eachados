import { IObjeto } from "../../../services/objeto/interface";
import { IUsuario } from "../../../services/usuario/interface";

export interface IObjectCardProps {
  object: IObjeto;
  user?: IUsuario;
  match?: boolean;
}
