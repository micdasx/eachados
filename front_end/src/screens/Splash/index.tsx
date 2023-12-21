import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Title, Subtitle } from "../../components/atoms";
import { COLORS } from "../../constants/colors/colors";
import styles from "./style.module.scss";

const Splash: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/select-object-type");
  };

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <img
          src={require("../../assets/images/splash_image.png")}
          className={styles.image}
        />

        <Subtitle style={{ color: COLORS.white, margin: 0 }}>
          Perdeu algo?
        </Subtitle>

        <Title style={{ color: COLORS.white, margin: 0 }}>EACH aqui!</Title>

        <Button children="Começar" onClick={goToHome} />
      </div>
    </div>
  );
};

export { Splash };
