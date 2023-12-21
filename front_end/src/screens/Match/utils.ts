import { IObjectCardProps } from "../../components/molecules/ObjectCard/interface";
import { DummyObjetosMatch } from "../../services/objeto/dummyData";

export const getAllObjects = (): IObjectCardProps[] => {
  return DummyObjetosMatch.map((o) => ({
    object: o,
  }));
};
