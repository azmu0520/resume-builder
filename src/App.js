import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Home />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div``;
