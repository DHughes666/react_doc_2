import Play from "./interaction/effects/effects-component";
import AppComp from "./interaction/context-components/context-components-exercises/app-component-exercise";
import { Form, Form1, Form2, TodoList, Counter1,
  CatFriends, CatFriends1 } from "./interaction/escape-hatches/refs-dom-manipulation/refs-dom-component";
import VideoPlayer from "./interaction/escape-hatches/refs-dom-manipulation/refs-dom-exercises/refs-dom-exercise1";
import Page from "./interaction/escape-hatches/refs-dom-manipulation/refs-dom-exercises/refs-dom-exercise2";
import CatFriendsExercise from "./interaction/escape-hatches/refs-dom-manipulation/refs-dom-exercises/refs-dom-exercise3";

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
      <br />
      <br />
      <br />
      <VideoPlayer />
      <br />
      <br />
      <br />
      <Page />
      <br />
      <br />
      <br />
      <CatFriendsExercise />
      
    </>
  )
}


export default App;