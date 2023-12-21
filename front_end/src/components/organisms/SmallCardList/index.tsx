import React from "react";
import { Title } from "../../atoms";
import { SmallCard } from "../../molecules";
import { ISmallCardListProps } from "./interface";
import styles from "./style.module.scss";

const SmallCardList: React.FC<ISmallCardListProps> = ({
  title,
  items,
  found,
}) => {
  const renderItems = () => {
    return items.map((item) => (
      <SmallCard {...item} key={item.title} found={found} />
    ));
  };

  return (
    <div className={styles.container}>
      {title ? <Title style={{ marginLeft: "8%" }}>{title}</Title> : null}
      <div className={styles.listContainer}>{renderItems()}</div>
    </div>
  );
};

export default SmallCardList;
