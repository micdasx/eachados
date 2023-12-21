import { IMAGES } from "../../constants/images";
import { ICategoria } from "./interface";

export const DummyCategorias: ICategoria[] = [
  {
    id: 2,
    descricao: "Recipiente",
    imagePath: IMAGES.cup,
  },
  {
    id: 1,
    descricao: "Eletrônico",
    imagePath: IMAGES.phone,
  },
  {
    id: 0,
    descricao: "Vestuário",
    imagePath: IMAGES.clothes,
  },
  {
    id: 3,
    descricao: "Material escolar",
    imagePath: IMAGES.bag,
  },
  {
    id: 4,
    descricao: "Documento",
    imagePath: IMAGES.book,
  },
];
