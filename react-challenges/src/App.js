import './App.css';
import Ex1 from './exercises/ex1';
import Ex2 from './exercises/ex2';
import Ex3 from './exercises/ex3';
import Ex4 from './exercises/ex4';
import React, {useState} from 'react';

function App() {
  const [exerciseNum, setExerciseNum] = useState('1');

  const processClick = (event) => {
    setExerciseNum(event.target.value);
  }

  return (
    <div className="App">
      <button value={'1'} onClick={processClick}>Exercise 1</button>|
      <button value={'2'} onClick={processClick}>Exercise 2</button>|
      <button value={'3'} onClick={processClick}>Exercise 3</button>|
      <button value={'4'} onClick={processClick}>Exercise 4</button>|
      <button value={'5'} onClick={processClick}>Exercise 5</button>|
      <button value={'6'} onClick={processClick}>Exercise 6</button>|
      <button value={'7'} onClick={processClick}>Exercise 7</button>|
      <button value={'8'} onClick={processClick}>Exercise 8</button>|
      <button value={'9'} onClick={processClick}>Exercise 9</button>
      <br/>
      {exerciseNum === '1' ? <Ex1/> : ""}
      {exerciseNum === '2' ? <Ex2/> : ""}
      {exerciseNum === '3' ? <Ex3/> : ""}
      {exerciseNum === '4' ? <Ex4/> : ""}
    </div>
  );
}

export default App;
