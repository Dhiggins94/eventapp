/** @jsxImportSource theme-ui */
// theme ui
import "@/styles/globals.css";
// import { jsx, ThemeProvider } from "theme-ui";
// import tailwindStyle from "theme";
import MainLayout from "@/components/layout/main-layout";
export default function App({ Component, pageProps }) {
  return (
    // <ThemeProvider theme={tailwindStyle}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    // </ThemeProvider>
  );
}
