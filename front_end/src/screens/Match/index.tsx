import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Subtitle } from "../../components/atoms";
import { Header } from "../../components/molecules";
import { ObjectList } from "../../components/organisms";
import styles from "./styles.module.scss";
import { getAllObjects } from "./utils";

const Match: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const goToPostScreen = () => navigate("/post");

  return (
    <div className={styles.screen}>
      <Header
        title="Match"
        subtitle="Veja os possíveis itens encontrados parecidos com o seu."
        onGoBack={goBack}
      />

      <div className={styles.buttonContainer}>
        <Subtitle children="Não achou seu item?" style={{ margin: 10 }} />

        <Button children="Poste no mural!" onClick={goToPostScreen} />
      </div>

      <ObjectList objects={getAllObjects()} match />
    </div>
  );
};

export default Match;
