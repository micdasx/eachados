import { IObjectCardProps } from "../../components/molecules/ObjectCard/interface";
import { DummyObjetosMural } from "../../services/objeto/dummyData";

export const getAllObjects = (): IObjectCardProps[] => {
  return DummyObjetosMural.map((o) => ({
    object: o,
  }));
};
