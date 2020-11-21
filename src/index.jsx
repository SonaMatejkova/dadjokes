import React from 'react';
import { render } from 'react-dom';
import { jokes } from './jokes.js';
import { Joke } from './Joke/joke.jsx';
import './index.html';
import './style.css';

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((joke) => (
          <Joke
            id={joke.id}
            name={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
