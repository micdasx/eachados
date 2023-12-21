import React from "react";
import { IMAGES } from "../../../constants/images";
import { Subtitle, Tag, Text, Title } from "../../atoms";
import { IObjectCardProps } from "./interface";

import styles from "./styles.module.scss";

const ObjectCard: React.FC<IObjectCardProps> = ({ object, match = false }) => {
  // console.log(match);

  return (
    <div className={styles.container}>
      <img src={IMAGES.grayObject} className={styles.images} />

      <div className={styles.matchContainer}>
        <div className={styles.match} style={{ width: object?.porcentagem }}>
          {match && <Title children={object?.porcentagem ?? ""} />}
        </div>
      </div>

      <Title children={object.descricao} style={{ marginBottom: 0 }} />

      <Text
        children={`${object.usuario!.nome} |  ${
          object.usuario!.tipoContato!.descricao
        } ${object.usuario!.contato} `}
      />

      <div className={styles.tags}>
        <Tag
          title={object.categoria!.descricao}
          image={object.categoria!.imagePath}
        />
        <Tag
          title={object.cor!.descricao}
          backgroundColor={object.cor!.hexadecimal}
        />
        <Tag title={object.local!.descricao} />
        <Tag title={object.piso!.descricao} />
      </div>
    </div>
  );
};

export default ObjectCard;
