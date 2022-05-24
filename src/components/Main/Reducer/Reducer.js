import { v4 as uuidv4 } from "uuid";

export const initialState = {
  data: [],
};

const pieChartItemGenerator = () => {
  return {
    name: uuidv4(),
    type: "PIE_CHART",
    data: [],
  };
};

const barChartItemGenerator = () => {
  return {
    name: uuidv4(),
    type: "BAR_CHART",
    data: [],
  };
};

const reducer = (state, action) => {
  let newData;
  const data = state.data;
  switch (action.type) {
    case "PIE_CHART":
      newData = [...data, pieChartItemGenerator()];
      return { ...state, data: newData };
    case "BAR_CHART":
      newData = [...data, barChartItemGenerator()];
      return { ...state, data: newData };
  }
};

export default reducer;
