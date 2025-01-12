import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, wd }) => {
  return (
    <Container>
      <Header />
      <StLayout wd={wd}>{children}</StLayout>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StLayout = styled.div`
  margin: 0 auto;
  width: ${({ wd }) => wd || "140rem"}; // 수정 원값 110rems
  min-width: 80rem;
  flex: 1;
`;
