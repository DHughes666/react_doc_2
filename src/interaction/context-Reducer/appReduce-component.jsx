import { useReducer } from "react";
import TaskList from "./taskList";
import AddTask from "./addTask";

let nextId = 3;
const initialTasks = [
    {id: 0, text: "Philosopher's Path", done: true},
    {id: 1, text: "Visit the temple", done: false},
    {id: 2, text: "Drink matcha", done: false},
];

const tasksReducer = (tasks, action) => {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false,
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            })
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

const TaskApp = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    const handleAddTask = (text) => {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text
        });
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'changed',
            task: task
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <>
            <h1>Day off in Kyoto</h1>
            <AddTask 
                onAddTask={handleAddTask}
            />
            <TaskList 
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    )
}

export default TaskApp;