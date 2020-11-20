import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'


import './App.css';
import './Card.css';

{/* 
React Component Layout

WholeBoard
  PlayerList
    Player
  PokerTable
    PotDisplay
    AllTableCards
      Card
  ControlBox
    <Fold, Call, Raise buttons etc>


    Add mp3 sound when you win on showdown
*/}

class Player extends React.Component{
  render () {
    return (
      <div class="player bg-info" style={this.props.alignment}>
        <div class="board-cards-hand"> 
          <Card card="AS.svg"></Card>
          <Card card="2C.svg"></Card>
        </div>
        <h5>{this.props.username}</h5>
        <h6>{this.props.chips}</h6>
      </div>
    );
  }
};


function createPlayerlist(players) {

    let playerlist = []; 
    for (var i = 0; i <= 8; i++){
      playerlist.push(<Player alignment = {players[i].alignment} key = {players[i].seat} username = {players[i].username} chips = {players[i].chips}/>);
    }
    return playerlist;
}


class PotDisplay extends React.Component{
  render () {
    return (
        <Badge variant="info" className="pot-display"><h4>6969$</h4></Badge>
    )
  }
}

class Card extends React.Component{
  render () {
    return (
    <div class ="card-wrapper">
      <div class = "card bg-secondary mx-1">
        <img src={"./cards/CARDBACK.svg"} class="card-image card-back"></img>
        <img src={"./cards/" + this.props.card} class="card-image card-front"></img>
      </div>
    </div>
    )
    }
}


class PokerTable extends React.Component{
  render () {
    return (
      <div class="col-9 m-auto table" style={{height:"100%"}}>
        {/* Inside table */}
        <PotDisplay />
        <div class="board-cards">
          <Card card="10C.svg"></Card>
          <Card card="2C.svg"></Card>
          <Card card="3C.svg"></Card>
          <Card card="4C.svg"></Card>
          <Card card="5C.svg"></Card>
        </div>
      </div>
    )
  }
};

class ControlBox extends React.Component{
  render() {
    return (
       <div id = "bottomRight">
          <Button variant="primary">Fold</Button>{' '}
          <Button variant="secondary">Call</Button>{' '}
          <Button variant="success">Raise</Button>{' '}
      </div>
    );
  }
};


class WholeBoard extends React.Component{
  render() {
    return (
       <div class = "overall">
          <Container>
            <Row class = "board-container bg-info" style={{height:"25vh"}}>
              <div class="col-10 m-auto bg-success"></div>
            </Row>
            <Row class = "board-container m-auto bg-white" style={{height:"40vh"}}>
              {createPlayerlist(this.props.players)}
              <PokerTable />
            </Row>
            <Row class = "board-container m-auto bg-white" style={{height:"35vh"}}>
              <ControlBox />
            </Row>
        </Container>
      </div>
    );
  }
};

const App = () => (
  <WholeBoard players={PLAYERS}/>
);


const PLAYERS = [
  {seat: "1", alignment:{left: "50%", top: "78%"}, username: "user1", chips: 69},
  {seat: "2", alignment:{left: "32%", top: "78%"}, username: "user2", chips: 69},
  {seat: "3", alignment:{left: "20%", top: "56%"}, username: "user3", chips: 69},
  {seat: "4", alignment:{left: "20%", top: "30%"}, username: "user4", chips: 69},
  {seat: "5", alignment:{left: "38%", top: "12%"}, username: "user5", chips: 69},
  {seat: "6", alignment:{left: "62%", top: "12%"}, username: "user6", chips: 69},
  {seat: "7", alignment:{left: "80%", top: "30%"}, username: "user7", chips: 69},
  {seat: "8", alignment:{left: "80%", top: "56%"}, username: "user8", chips: 69},
  {seat: "9", alignment:{left: "68%", top: "78%"}, username: "user9", chips: 69},
];


export default App; 
