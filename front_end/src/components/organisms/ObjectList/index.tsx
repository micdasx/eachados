import React from "react";
import { ObjectCard } from "../../molecules";
import { IObjectListProps } from "./interface";

const ObjectList: React.FC<IObjectListProps> = ({ objects, match }) => {
  console.log("LISTA" + match);

  const renderObjects = () => {
    return objects.map((o) => <ObjectCard {...o} match={match} />);
  };

  return <div>{renderObjects()}</div>;
};

export default ObjectList;
