import './App.css';
import MainPage from "./components/bonuses/mainPage/MainPage";
import Bonuses from "./components/bonuses/Bonuses";
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
            <MainPage tasks={tasks} setTasks={{setTasks}}/>
            {/*{<Route path="/" element={MainPage/>}>*/}
            <Bonuses/>
        </div>
    );
}

export default App;
