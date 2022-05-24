import { createContext } from "react";
import { initialState } from "../Reducer/Reducer";

const ChartsContext = createContext(initialState);

export default ChartsContext;
