import { useContext } from "react";
import ChartsContext from "../Main/Context/ChartsContext";
import "./Menu.css";

const Menu = () => {
  const [state, dispatch] = useContext(ChartsContext);
  return (
    <div className="menu">
      <h1 onClick={() => dispatch({ type: "PIE_CHART" })}>pie chart</h1>
      <h1 onClick={() => dispatch({ type: "BAR_CHART" })}>bar chart</h1>
    </div>
  );
};

export default Menu;
