import { ISmallCardProps } from "../../molecules/SmallCard/interface";

export interface ISmallCardListProps {
  items: ISmallCardProps[];
  title?: string;
  found?: boolean;
}
