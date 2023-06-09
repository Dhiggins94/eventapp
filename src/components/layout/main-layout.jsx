import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
// this helps bring out header and footer throughout the applciation. the children gets feed inbetween them as the data for our main layout component as children