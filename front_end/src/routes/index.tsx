import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, SelectObjectType, Splash } from "../screens";
import Match from "../screens/Match";
import Mural from "../screens/Mural";
import ObjectDetails from "../screens/NewObject/ObjectDetails";
import Success from "../screens/NewObject/Success";
import ObjectDetailsFound from "../screens/NewObjectFound/ObjectDetailsFound";
import { SelectObjectTypeFound } from "../screens/NewObjectFound/SelectObjectTypeFound";
import SuccessFound from "../screens/NewObjectFound/SuccessFound";
import Post from "../screens/Post";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route caseSensitive path="/*" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/select-object-type" element={<SelectObjectType />} />
      <Route path="/object-details" element={<ObjectDetails />} />
      <Route path="/success" element={<Success />} />
      <Route path="/mural" element={<Mural />} />
      <Route path="/match" element={<Match />} />
      <Route path="/post" element={<Post />} />

      <Route
        path="/select-object-type-found"
        element={<SelectObjectTypeFound />}
      />
      <Route path="/object-details-found" element={<ObjectDetailsFound />} />
      <Route path="/success-found" element={<SuccessFound />} />
    </Routes>
  );
};

export { Router };
