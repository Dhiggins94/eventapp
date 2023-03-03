/** @jsxImportSource theme-ui */
// theme ui
import "@/styles/globals.css";
import { jsx, ThemeProvider } from "theme-ui";
import tailwindStyle from "theme";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={tailwindStyle}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
