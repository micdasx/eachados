import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Subtitle, Title } from "../../../components/atoms";
import { IMAGES } from "../../../constants/images";

import styles from "./styles.module.scss";

const SuccessFound: React.FC = () => {
  const navigate = useNavigate();

  const goToMural = () => {
    navigate("/mural");
  };

  return (
    <div className={styles.screen}>
      <img src={IMAGES.success} className={styles.image} />

      <Title children="Pronto!" style={{ textAlign: "center", margin: 0 }} />

      <Subtitle
        children="Seu objeto foi cadastrado em nossa base e você poderá ser visto pelos outros usuários."
        style={{ textAlign: "center" }}
      />

      <div className={styles.button}>
        <Button children="Fechar" onClick={goToMural} />
      </div>
    </div>
  );
};

export default SuccessFound;
