import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { monsterrat } from "@/utils";
import "@/styles/animations.css";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <Loader />,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        {loading && <Loader />}
        {mounted && (
          <div
            className={
              "bg-[#F8F3ED] text-[#2C1810] dark:bg-[#2C1810] dark:text-[#FFFBF7] " +
              monsterrat.className
            }
          >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <Analytics />
          </div>
        )}
      </ThemeProvider>
    </SessionProvider>
  );
}
