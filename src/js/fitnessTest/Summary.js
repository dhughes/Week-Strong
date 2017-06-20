import React from 'react';
import styled from 'styled-components';
import { Vbox } from '../Box';
import Body from '../Body';
import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import Button from '../Button';
import theme from '../theme';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  & td, & th{
    text-align: left;
    padding: 0.2rem 0.5rem;
    margin: 0;
    width: 50%;
  }

  & tr:nth-child(even) td{
    background-color: ${theme.secondary};
  }

  & tr:nth-child(odd) td{
    background-color: ${theme.secondary.lighten(0.5)};
  }

  & tr:last-child td{
    background-color: ${theme.secondary.darken(0.125)};
    font-weight: bold;
  }


  & th{
    background-color: ${theme.primary};
    color: ${theme.primaryText.negate()};
  }
`;

const Summary = props => (
  <Vbox>
    <NavigationBar title="Fitness Test Summary" />
    <Body justifyContent="flex-start">
      {props.results.map(result => (
        <div key={result.id}>
          <h2>{props.getExerciseById(result.id).name}</h2>
          <Table>
            <tr><th>Round</th><th>Reps</th></tr>
            {result.testResults.map((result, index) => <tr><td>{index + 1}</td><td>{result}</td></tr>)}
            <tr><td>Total:</td><td>{result.testResults.reduce((round, acc) => round + acc, 0)}</td></tr>
          </Table>
        </div>
      ))}
    </Body>
    <Footer style={{ flexShrink: 0 }}>
      <p>It's time to create your profile!</p>
      <Button className="default" onClick={props.onCreateProfileClick}>Create Profile</Button>
    </Footer>
  </Vbox>
);

export default Summary;
