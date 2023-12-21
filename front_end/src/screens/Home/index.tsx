import React from "react";
import { SmallCardList } from "../../components/organisms";
import { Header } from "../../components/molecules";
import { IMAGES } from "../../constants/images";

const Home: React.FC = () => {
  return (
    <>
      <Header
        onGoBack={() => console.log("clicou")}
        title="Title"
        subtitle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      ></Header>
    </>
  );
};

export { Home };
