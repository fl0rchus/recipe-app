import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { NextUIProvider } from "@nextui-org/react";
import "@styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <NextUIProvider>{getLayout(<Component {...pageProps} />)}</NextUIProvider>
  );
}

export default MyApp;
