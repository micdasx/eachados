import { DummyCores } from "../../../services/cor/dummyData";
import { DummyLocais } from "../../../services/local/dummyLocal";
import { DummySubCategoria } from "../../../services/subCategoria/dummyData";
import { DummySubLocais } from "../../../services/subLocal/dummyData";

export const getAllSubCategorias = (id: number) => {
  return DummySubCategoria.filter((s) => s.idCategoria === id).map((s) => ({
    label: s.descricao,
    value: `${s.id}`,
  }));
};

export const getAllCores = () => {
  return DummyCores.map((s) => ({
    label: s.descricao,
    value: `${s.id}`,
    colorHEX: s.hexadecimal,
  }));
};

export const getAllLocais = () => {
  return DummyLocais.map((s) => ({
    label: s.descricao,
    value: `${s.id}`,
  }));
};

export const getAllSubLocais = () => {
  return DummySubLocais.map((s) => ({
    label: s.descricao,
    value: `${s.id}`,
  }));
};
