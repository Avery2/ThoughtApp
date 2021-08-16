import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import InputArea from './InputArea';
import './App.global.css';

const LayoutContainer = styled.div`
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 2;
  align-items: center;
`;

const Title = styled.h1`
  margin: auto;
  padding: 15px;
`;

const Hello = () => {
  return (
    <LayoutContainer>
      <Title>Thoughts</Title>
      <InputArea />
    </LayoutContainer>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
