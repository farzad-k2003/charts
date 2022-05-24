import Menu from "../Menu/Menu";
import Charts from "../Charts/Charts";
import Inspect from "../Inspect/Inspect";
import { useReducer } from "react";
import ChartsContext from "./Context/ChartsContext";
import Reducer, { initialState } from "../Main/Reducer/Reducer";
import "./Main.css";

const Main = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="main">
      <ChartsContext.Provider value={[state, dispatch]}>
        <Inspect />
        <Charts />
        <Menu />
      </ChartsContext.Provider>
    </div>
  );
};

export default Main;
