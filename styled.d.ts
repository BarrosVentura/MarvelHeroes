import { theme } from "@/app/theme";
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      gunmetal: "#253031ff";
      platinum: "#dcdcddff";
      frenchGray: "#c5c3c6ff";
      engineeringOrange: "#bf0603ff";
      blueMunsell: "#1985a1ff";
    };
  }
}
