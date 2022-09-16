import type { AppProps } from "next/app";
import { ReactElement } from "react";
// eslint-disable-next-line import/no-unresolved
import "uno.css";
import "@unocss/reset/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
