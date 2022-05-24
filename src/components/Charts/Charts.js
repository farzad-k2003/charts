import "./Charts.css";
import ChartsContext from "../Main/Context/ChartsContext";
import { ChartGenerator } from "./utils/ChartGenerator";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { useContext } from "react";

const Charts = () => {
  const [state, dispatch] = useContext(ChartsContext);
  return (
    <div className="charts">
      <div className="charts-container">{ChartGenerator(state)}</div>
    </div>
  );
};

export default Charts;
