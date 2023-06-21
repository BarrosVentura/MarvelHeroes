import { theme } from "@/app/theme";
import "styled-components";

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
