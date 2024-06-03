import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px'
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}

function Tile(props) {
  return (
    <button style={style.letter} onClick={props.onClick}>{ props.letter }</button>
  );
}

function Application(props) {

  const letters = [];
  const pickedLetters = [];

  const firstLetterIndex = 65
  const lastLetterIndex = 90;
  for(let i = firstLetterIndex; i < lastLetterIndex + 1; i++) {
    letters.push(String.fromCharCode(i));
  }

  function AppendLetter(letter) {

    if(pickedLetters.length > 1 && pickedLetters[pickedLetters.length - 1] === letter && pickedLetters[pickedLetters.length - 2] === letter) {
      pickedLetters.splice(-2, 2, "_");
    } else {
      pickedLetters.push(letter);
    }

    const newOutputString = pickedLetters.join('');
    document.getElementById("outputString").innerHTML = newOutputString;
  }

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
      {letters.map(letter => (
        <Tile key={letter} letter={letter} onClick={() => AppendLetter(letter)} />
      ))}
      </aside>
      <div id="outputString"></div>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);
