import './App.css';
import MainPage from "./components/MainPage";
import {TASK_TEST_LIST} from "./constants";
import {useEffect, useState} from "react";

const App = () => {

    // tasks list
    // deadline
    // assign to user
    // ask info
    // task completed
    // edit task
    // create and delete tasks

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(TASK_TEST_LIST)
    }, [])


    return (
        <div className="App">
            <MainPage tasks={tasks}/>
        </div>
    );
}

export default App;
