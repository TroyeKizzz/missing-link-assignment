import './App.css';
import Ex1 from './exercises/ex1';
import Ex2 from './exercises/ex2';
import Ex3 from './exercises/ex3';
import Ex4 from './exercises/ex4';
import Ex5 from './exercises/ex5';
import Ex6 from './exercises/ex6';
import Ex7 from './exercises/ex7';
import Ex8 from './exercises/ex8';
import Ex9 from './exercises/ex9';
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
      {exerciseNum === '5' ? <Ex5/> : ""}
      {exerciseNum === '6' ? <Ex6/> : ""}
      {exerciseNum === '7' ? <Ex7/> : ""}
      {exerciseNum === '8' ? <Ex8/> : ""}
      {exerciseNum === '9' ? <Ex9/> : ""}
    </div>
  );
}

export default App;
