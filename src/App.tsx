import React from 'react';
import hotdog from './hotdog.png';
import boblerbilde from './bobler.png';
import './App.css';
import Song from './Song';

function generateRandomCss(tall: number, antallBilder: number) {
  const animasjonsTall = Math.random() * (20 - 5) + 5 
  return {
    left: `${tall * (100 / antallBilder)}%`, animation: `fall ${animasjonsTall}s linear ${Math.random() * 5}s infinite`
  }
}

const antallBilder = 15

const polser = Array.from(Array(antallBilder).keys()).map((tall) => {
  return (
    <div className="polse" style={generateRandomCss(tall, antallBilder)}>
      <img alt="polse" src={hotdog} height="50" width="75" />
    </div>
  )
})

const bobler = Array.from(Array(antallBilder).keys()).map((tall) => {
  return (
    <div className="polse" style={generateRandomCss(tall, antallBilder)}>
      <img alt="bobler" src={boblerbilde} height="97" width="75" />
    </div>
  )
})


function App() {

  return (
    <div className="app">
      <div className="innhold-wrapper">
        <div>
          <div className="overskriftboks">
            <h1>BOBLER &amp; BRATWURST</h1>
            <h1 className="neonText">BOBLER &amp; BRATWURST</h1>
          </div>
          <h2>Bursdagsfeiring 16. oktober</h2>
        </div>
        <div className="innholdsboks">
          <h3>Agenda</h3>
            <p>Live, love, lounge med velkomstbobler i labben</p>
            <p>"Rebus"</p>
            <p>Pils, pøls og premiering - KJØH</p>
            <p>Pandoras</p>
            <p>Klisjé-Kjells Karaokeparty </p>
            <p>Natta eller ikke natta ;-)</p>
        </div>
        <div className="innholdsboks">
          <h3>Lag</h3>
            <p>Kommer ...</p>
        </div>
        <div className="polsewrapper">
          {polser}
          {bobler}
        </div>
      </div>
      <Song />
    </div>
  );
}

export default App;