import { createContext  } from "react";
import { FetchApi } from "../types";

const ThemeContext = createContext({} as FetchApi | undefined);

export default ThemeContext;