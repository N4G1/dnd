import { Route, Routes } from "react-router-dom";

import "./App.css";
import TattooPage from "./containers/TattooPage";
import CraftingPage from "./containers/CraftingPage";
import WelcomePage from "./containers/WelcomePage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/dnd" element={<WelcomePage />} />
        <Route path="/dnd/tattoos" element={<TattooPage />} />
        <Route path="/dnd/crafting" element={<CraftingPage />} />
        <Route path="*" element={<p> SOMETHING WENT WRONG </p>} />
      </Routes>
    </div>
  );
};

export default App;
