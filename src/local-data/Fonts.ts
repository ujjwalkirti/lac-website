import { Libre_Caslon_Text, Montserrat } from "next/font/google";

const libre_caslon_text = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const monsterrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export { libre_caslon_text, monsterrat };
