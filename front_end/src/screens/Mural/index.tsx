import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/molecules";
import { ObjectList } from "../../components/organisms";
import styles from "./styles.module.scss";
import { getAllObjects } from "./utils";

const Mural: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className={styles.screen}>
      <Header
        title="Mural de perdidos"
        subtitle="Veja todos os itens perdidos, entre em contato caso tenha encontrado algum deles."
        onGoBack={goBack}
      />

      <ObjectList objects={getAllObjects()} />
    </div>
  );
};

export default Mural;
