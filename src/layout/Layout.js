import React from "react";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Container } from "../layout/LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
