import React from "react";
import { SmallCardList } from "../../../components/organisms";
import { Header } from "../../../components/molecules";
import styles from "./style.module.scss";
import { DummyCategorias } from "../../../services/categoria/dummyData";
import { ISmallCardProps } from "../../../components/molecules/SmallCard/interface";
import { useNavigate } from "react-router-dom";

const SelectObjectType: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const dataToOptions = (): ISmallCardProps[] => {
    return DummyCategorias.map((c) => ({
      id: c.id,
      title: c.descricao,
      image: c.imagePath,
    }));
  };

  return (
    <div className={styles.screen}>
      <Header
        onGoBack={goBack}
        title="Objeto Perdido"
        subtitle="Responda algumas perguntas sobre o objeto que você perdeu para que possamos cadastrá-lo em nossa base"
      />

      <SmallCardList title="Qual o tipo do objeto?" items={dataToOptions()} />
    </div>
  );
};

export { SelectObjectType };
