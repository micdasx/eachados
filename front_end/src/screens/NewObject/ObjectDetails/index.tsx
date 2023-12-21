import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../components/atoms";
import {
  ColorPicker,
  Dropdown,
  Header,
  Input,
} from "../../../components/molecules";
import styles from "./style.module.scss";
import {
  getAllCores,
  getAllLocais,
  getAllSubCategorias,
  getAllSubLocais,
} from "./utils";

const ObjectDetails: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { id } = state as { id: number };

  const [color, setColor] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const goBack = () => navigate(-1);

  const handleSubmitObject = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/match");
    }, 2000);
  };

  return (
    <div className={styles.screen}>
      <Header
        onGoBack={goBack}
        title="Objeto Perdido"
        subtitle="Responda algumas perguntas sobre o objeto que você perdeu para que possamos cadastrá-lo em nossa base"
      />

      <div className={styles.container}>
        <Dropdown
          title="Qual a subcategoria?"
          placeholder="Selecione o tipo"
          options={getAllSubCategorias(id)}
        />

        <ColorPicker
          options={getAllCores()}
          selectedOption={color}
          setSelectedOption={setColor}
        />

        <Dropdown
          title="Onde você perdeu?"
          placeholder="Selecione o tipo"
          options={getAllLocais()}
        />

        <Dropdown
          title="Onde, mais especificamente?"
          placeholder="Selecione o tipo"
          options={getAllSubLocais()}
        />

        <Input
          title="Informações adicionais"
          description="Escreva aqui quaisquer informações/descrições extras que você acha que possam ser relevantes para descrever o seu objeto"
          placeholder="Escreva aqui..."
        />

        <div className={styles.button}>
          <Button
            children="Cadastrar objeto"
            onClick={handleSubmitObject}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ObjectDetails;
