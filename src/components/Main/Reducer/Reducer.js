export const initialState = {
  data: [],
};

const reducer = (state, action) => {
  let newData;
  const data = state.data;
  switch (action.type) {
    case "PIE_CHART":
      newData = [...data, "pie chart"];
      return { ...state, data: newData };
    case "BAR_CHART":
      newData = [...data, "bar chart"];
      return { ...state, data: newData };
  }
};

export default reducer;
