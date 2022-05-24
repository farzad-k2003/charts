import "./Charts.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "farzad",
    uv: 4000,
    pv: 3000,
  },
];

const Charts = () => {
  return (
    <div className="charts">
      <BarChart width={430} height={150} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="red" />
        <Bar dataKey="uv" fill="blue" />
      </BarChart>
    </div>
  );
};

export default Charts;
