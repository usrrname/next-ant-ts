import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { Page } from "../additional";

export type NextAppProps = AppProps & {
  Component: Page;
  userAgent?: string;
};

const isProd = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }: NextAppProps) {

  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  const router = useRouter();

  useEffect(() => {
    if (isProd) {
      const handleRouteChange = (url: URL) => {
        window.gtag("config", `${process.env.NEXT_PUBLIC_GA_ID}`, {
          page_path: url,
        });
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    } else {
      return;
    }
  }, [router.events]);

  // return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
  return getLayout(
    <Layout>
      {pageProps.userAgent}
      <Component {...pageProps} />
    </Layout>
  );
}
