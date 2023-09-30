import Play from "./interaction/effects/effects-component";
import AppComp from "./interaction/context-components/context-components-exercises/app-component-exercise";
import Counter from "./interaction/escape-hatches/refs/refs-component";
import { Stopwatch1 } from "./interaction/escape-hatches/refs/timer-component";
import Chat from "./interaction/escape-hatches/refs/refs-exercises/refExercise1-component";
import Toggle from "./interaction/escape-hatches/refs/refs-exercises/refExercise2-component";
import Dashboard from "./interaction/escape-hatches/refs/refs-exercises/refExercise3-component";
import Chatty from "./interaction/escape-hatches/refs/refs-exercises/refExercise4-component";

const App = () => {
  return (
    <>
      <Play />
      <br />
      <br />
      <br />
      <AppComp />
      <br />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <br />
      <Stopwatch1 />
      <br />
      <br />
      <br />
      <Chat />
      <br />
      <br />
      <br />
      <Toggle />
      <br />
      <br />
      <br />
      <Dashboard />
      <br />
      <br />
      <br />
      <Chatty />
      
    </>
  )
}


export default App;