import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
} from "recharts";

const sampleBar = [
  {
    name: "Sample Bar",
    uv: 4000,
    pv: 3000,
  },
];

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

export const ChartGenerator = (state) => {
  const output = state.data.map((item) => {
    switch (item.type) {
      case "BAR_CHART":
        return (
          <div className="bar-chart-item" key={item.name}>
            <BarChart
              width={430}
              height={150}
              data={item.data.length === 0 ? sampleBar : item.data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pv" fill="red" />
              <Bar dataKey="uv" fill="blue" />
            </BarChart>
          </div>
        );
      case "PIE_CHART":
        return (
          <div className={`charts-container ${item.name}`} key={item.name}>
            <PieChart width={430} height={150}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
            </PieChart>
          </div>
        );
    }
  });

  return output;
};
