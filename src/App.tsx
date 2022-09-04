import { Route, Routes } from "react-router-dom";

import "./App.css";
import TattooPage from "./containers/TattooPage";
import CraftingPage from "./containers/CraftingPage";
import WelcomePage from "./containers/WelcomePage";
import TattooProvider from "./components/TattooProvider";

const App = () => {
  return (
    <TattooProvider>
      <div className="App">
        <Routes>
          <Route path="/dnd" element={<WelcomePage />} />
          <Route path="/dnd/tattoos" element={<TattooPage />} />
          <Route path="/dnd/crafting" element={<CraftingPage />} />
          <Route path="*" element={<p> SOMETHING WENT WRONG </p>} />
        </Routes>
      </div>
    </TattooProvider>
  );
};

export default App;
