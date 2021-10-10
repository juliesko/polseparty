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
            <p>16:00 - 17:00: Mottakelse og velkomstbobler</p>
            <p>17:00 - 18:30: "Rebus"</p>
            <p>19:00: PØLSER!!!!!!!!!!</p>
            <br/>
            <p>Resten av kvelden:</p>
            <p>Fri lek</p>
            <p>Kanskje kaste plastballer oppi noen kopper</p>
            <p>Digge grooves fra DJ Bergman</p>
            <p>Klisjé-Kjells Karaokeparty</p>
        </div>
        <div className="innholdsboks">
          <h3>Rebuslag</h3>
          <div className="lagwrapper">
            <div className="kolonne">
              <h4>Lag 1</h4>
              <p>Sara</p>
              <p>Sofie G</p>
              <p>Hege</p>
              <p>Anna</p>
              <p>Ine</p>
              <p>Jonas D</p>
              <p>Ghers</p>
              <p>Tobias</p>
              <p>Andreas</p>
            </div>
            <div className="kolonne">
              <h4>Lag 2</h4>
              <p>Grete</p>
              <p>Ane</p>
              <p>Cecilie</p>
              <p>Marie B</p>
              <p>Joachim</p>
              <p>Sverre</p>
              <p>Bjørn</p>
              <p>Morten</p>
              <br/>
            </div>
            <div className="kolonne">
              <h4>Lag 3</h4>
              <p>Jorid</p>
              <p>Camilla</p>
              <p>Anne</p>
              <p>Harriet</p>
              <p>Simen</p>
              <p>Jens D</p>
              <p>Abdi</p>
              <p>Magnus A</p>
              <br/>
            </div>
            <div className="kolonne">
              <h4>Lag 4</h4>
              <p>Haga</p>
              <p>Silje</p>
              <p>Thea</p>
              <p>Eirin</p>
              <p>Jonas N</p>
              <p>Max</p>
              <p>Magnus H</p>
              <p>Sander</p>
              <br/>
            </div>
            <div className="kolonne">
              <h4>Lag 5</h4>
              <p>Kine</p>
              <p>Sofie F</p>
              <p>Ingvild</p>
              <p>Nora</p>
              <p>Julie H</p>
              <p>Ketil</p>
              <p>Jens Martin</p>
              <p>Jonathan</p>
              <p>Henrik</p>
            </div>
          </div>
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
