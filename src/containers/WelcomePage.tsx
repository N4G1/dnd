import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <h1> Welcome to DnD Shenanigans </h1>
      <p>
        <Link to="/dnd/tattoos"> Tattoos </Link>
      </p>
      <p>
        <Link to="/dnd/crafting"> Crafting </Link>
      </p>
    </>
  );
};

export default WelcomePage;
