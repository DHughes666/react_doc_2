import TaskList from "./taskList";
import AddTask from "./addTask";
import TasksProvider from "./tasksContext";

// TasksProvider is the aspect that knowns how to deal with tasks
// useTasks knows how to read tasks
// useTasksDispatch knows how to update them from any component

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