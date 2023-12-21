import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms";
import { Header, Input } from "../../components/molecules";
import styles from "./style.module.scss";

const Post: React.FC = () => {
  const navigate = useNavigate();

  const [color, setColor] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const goBack = () => navigate(-1);

  const handleSubmitObject = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/success");
    }, 2000);
  };

  return (
    <div className={styles.screen}>
      <Header
        onGoBack={goBack}
        title="Postar objeto no mural"
        subtitle="Responda algumas perguntas sobre o objeto que você perdeu para que possamos cadastrá-lo em nossa base"
      />

      <div className={styles.container}>
        <Input
          title="Título do post"
          description="Escreva aqui quaisquer informações/descrições extras que você acha que possam ser relevantes para descrever o seu objeto"
          placeholder="Escreva aqui..."
        />

        <div className={styles.button}>
          <Button
            children="Postar objeto"
            onClick={handleSubmitObject}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
