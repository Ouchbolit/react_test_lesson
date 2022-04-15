import React, {memo, useState} from "react";
import classes from './mainPage.module.css'
import TaskCard from "./TaskCard";
import {TaskState} from "./store/tasks";
import {apiGateway} from "../API/api";
import moment from "moment";

const MainPage = () => {

        const [taskTitle, setTaskTitle] = useState()
        const [taskDescription, setTaskDescription] = useState()

        const handleChangeTitle = (e) =>{
            setTaskTitle(e.target.value)
        }

        const handleChangeDescription = (e) =>{
            setTaskDescription(e.target.value)
        }

        const handleSubmitNewTask = async () => {
            const res = await apiGateway.tasks.createTask({
                    title: taskTitle,
                    description: taskDescription,
                    deadline: moment()
                })
            if(res.status !== 200) {
                console.log('Something went wrong')
                console.log(res)
                return null
            }
            const allTasksRes = await apiGateway.tasks.getTasks()
            TaskState.setTasks(allTasksRes.data)
        }

        return (
            <div className={classes.mainPageWrapper}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto'}}>

                <input
                    placeholder='Title'
                    value={taskTitle}
                    onChange={handleChangeTitle}
                />

                    <input
                        placeholder='Description'
                        value={taskDescription}
                        onChange={handleChangeDescription}
                    />
                    <button onClick={handleSubmitNewTask}>Create task</button>

                </div>
                {TaskState.tasks.map(task => <TaskCard task={task} key={task.id}/>)}
            </div>
        )
    }

export default memo(MainPage)