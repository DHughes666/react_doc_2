import Form, { Accordion} from "./state_manage_component";
import TaskApp from "./tasky/taskMenu_component";
import Messenger2b from "./tasky/exercise3/messenger3_component";
import FilterableList from "./state_management/search_component";
import Page from "./contexts/main_component";
import Page2 from "./contexts/main2_component";



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
      <TaskApp />
      <hr />
      <hr />
      <hr />
      <hr />
      <Messenger2b />
      <hr />
      <hr />
      <hr />
      <hr />
      <FilterableList />
      <hr />
      <hr />
      <hr />
      <hr />
      <Page />
      <hr />
      <hr />
      <hr />
      <hr />
      <Page2 />
      
      

    </>

  )
}





export default App;