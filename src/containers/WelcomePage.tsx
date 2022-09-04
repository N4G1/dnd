import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <h1> Welcome to DnD Shenanigans </h1>
      <p>
        <Link to="/dnd/tattoos" className="App-link">
          Tattoos
        </Link>
      </p>
      <p>
        <Link to="/dnd/crafting" className="App-link">
          Crafting
        </Link>
      </p>
    </>
  );
};

export default WelcomePage;
