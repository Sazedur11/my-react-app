import "./App.css";
import Counter from "./CounterNum";
import Counter2 from "./Counter2";
import handleClick from "./Doya";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Counter2></Counter2>
      <Counter></Counter>
      <Todo task="Learn React"></Todo>
      <Todo task="Learn React core concept"></Todo>
      <Todo task="Repeat react js again and again"></Todo>
      <button onClick={handleClick}>Click here</button>
    </>
  );
}

export default App;
