import TaskList from "./taskList";
import AddTask from "./addTask";
import TasksProvider from "./tasksContext";


const TaskApp = () => {
    
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}

export default TaskApp;