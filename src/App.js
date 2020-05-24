import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withTheme} from './provider/ThemeProvider'
import styled from 'styled-components'
import cog from './cog.png'

function App(props) {
  console.log(props)
  return (
    <Container>
      <img id="big-cog" src={cog} />
    </Container>
  );
}

const Container = withTheme(styled.div`
height: 400vh;

  #big-cog {
    position: fixed;
    transform: rotate(${props => props.scrollPosition / 20}deg)
  }
`)

export default withTheme(App);
