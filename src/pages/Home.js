import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header, Modes } from "../components/";

function Home() {
  return (
    <Fragment>
      <Header bgColor='rgba(8, 32, 50, 0.75)' color='rgb(255, 76, 41)'>
        Tic-Tac-Toe
      </Header>
      <Modes bgColor='rgba(8, 32, 50, 0.75)' color='rgb(255, 76, 41)' />
    </Fragment>
  );
}

export default Home;
