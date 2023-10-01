import Play from "./interaction/effects/effects-component";
import AppComp from "./interaction/context-components/context-components-exercises/app-component-exercise";
import { Form, Form1, Form2, TodoList, Counter1,
  CatFriends, CatFriends1 } from "./interaction/escape-hatches/refs-dom-manipulation/refs-dom-component";
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
      <br />
      <br />
      <br />
      <CatFriends1 />
      <br />
      <br />
      <br />
      <Form1 />
      <br />
      <br />
      <br />
      <Form2 />
      <br />
      <br />
      <br />
      <TodoList />
      <br />
      <br />
      <br />
      <Counter1 />
      
    </>
  )
}


export default App;