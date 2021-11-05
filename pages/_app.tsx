import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

import GlobalStyles from "../styles/Global.styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
