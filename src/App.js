import Play from "./interaction/effects/effects-component";
import AppComp from "./interaction/context-components/context-components-exercises/app-component-exercise";
import Counter from "./interaction/escape-hatches/refs/refs-component";
import Stopwatch from "./interaction/escape-hatches/refs/timer-component";

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
      <Stopwatch />
      
    </>
  )
}


export default App;