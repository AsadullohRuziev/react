import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map(({ path, id, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default Root;

const Container = styled.div`
  display: flex;
`;
