interface Props {
  asd: Function;
}

const Header = ({ asd }: Props) => {
  return (
    <div className={"header"}>
      <label className={"input-label"}>
        <input type={"checkbox"} className={"input"} /> Temporary{" "}
      </label>
      <label className={"input-label"}>
        <input type={"checkbox"} className={"input"} /> Proficiency{" "}
      </label>
      <label className={"input-label"}>
        <input type={"checkbox"} className={"input"} /> Expertise{" "}
      </label>
      <label className={"input-label"}>
        <input type={"checkbox"} className={"input"} /> Temporary{" "}
      </label>
      <label className={"input-label"}>
        <input type={"checkbox"} className={"input"} /> Temporary{" "}
      </label>
      <label>
        <input className={"input"} style={{ zoom: 1.5, width: "15px" }} /> DEX{" "}
      </label>
      <label>
        <input className={"input"} style={{ zoom: 1.5, width: "15px" }} /> PROF{" "}
      </label>
    </div>
  );
};

export default Header;
