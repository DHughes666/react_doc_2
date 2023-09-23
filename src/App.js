import Form, { Accordion} from "./state_manage_component";
import Messenger from "./chapApp/main_menu_component";
import TaskApp from "./tasky/taskMenu_component";
import TaskApp2 from "./tasky/taskMenu2_component";
import Messenger2 from "./tasky/exercise/messenger_component";
import Messenger2a from "./tasky/exercise2/messenger2_component";




const App = () => {
  return (
    <>
      <Form />
      <hr />
      <hr />
      <hr />
      <hr />
      <Accordion />
      <hr />
      <hr />
      <hr />
      <hr />
      <Messenger />
      <hr />
      <hr />
      <hr />
      <hr />
      <TaskApp />
      <hr />
      <hr />
      <hr />
      <hr />
      <TaskApp2 />
      <hr />
      <hr />
      <hr />
      <hr />
      <Messenger2 />
      <hr />
      <hr />
      <hr />
      <hr />
      <Messenger2a />
      
      

    </>

  )
}





export default App;