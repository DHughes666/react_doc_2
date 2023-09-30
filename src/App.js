import Play from "./interaction/effects/effects-component";
import AppComp from "./interaction/context-components/context-components-exercises/app-component-exercise";
import { Form, CatFriends } from "./interaction/escape-hatches/refs-dom-manipulation/refs-dom-component";
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
      <Form />
      <br />
      <br />
      <br />
      <CatFriends />
      
    </>
  )
}


export default App;