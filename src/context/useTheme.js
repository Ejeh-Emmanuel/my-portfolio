import {
  useContext
} from "react";
import ThemeContext from "./theme";


function useTheme() {

  return useContext(ThemeContext);

}


export default useTheme;