import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

const monsterrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <div className={monsterrat.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}
