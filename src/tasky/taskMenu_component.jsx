import { useReducer } from "react";
import AddTask from "./addTask_component";
import TaskList from "./tasklist_component";

let nextId = 3;

const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
]

const taskReducer2 = (tasks, action) => {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                }
            ]
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
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const TaskApp = () => {
    const [tasks, dispatch] = useReducer(taskReducer2, initialTasks);

    const handleAddTask = (text) => {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        })
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'changed',
            task: task,
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'deleted',
            id: taskId
        })
    }

    return (
        <>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList 
                tasks = {tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask} 
            />
        </>
    )
}

export default TaskApp;