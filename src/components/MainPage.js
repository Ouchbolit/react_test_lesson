import React, {memo, useState} from "react";
import classes from './mainPage.module.css'
import TaskCard from "./TaskCard";
import {TaskState} from "./store/tasks";
import {apiGateway} from "../API/api";
import moment from "moment";
import {observer} from "mobx-react-lite";

const MainPage = observer (() => {

        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')

        const handleChangeTitle = (e) =>{
            e.preventDefault()
            setTitle(e.target.value)
        }

        const handleChangeDescription = (e) =>{
            e.preventDefault()
            setDescription(e.target.value)
        }

    const deleteTask = async (task) => {
        const res = await apiGateway.tasks.deleteTasks({id: task.id})
        if (res.status !== 200) {
            console.log('Something wrong')
            console.log(res)
            return null
        }
        const allTasksRes = await apiGateway.tasks.getTasks()
        TaskState.setTasks(allTasksRes.data)
    }

    const editTask = async (task, value) => {
        const res = await apiGateway.tasks.editTask({id: task.id, title: value.title, description: value.description, deadline: moment()})
        if (res.status !== 200) {
            console.log('Something wrong')
            console.log(res)
            return null
        }
        const allTasksRes = await apiGateway.tasks.getTasks()
        TaskState.setTasks(allTasksRes.data)
    }

    const addNewTask = async () => {
        const res = await apiGateway.tasks.createTask({title: title, description: description, deadline: moment()})
        if (res.status !== 201) {
            console.log('Something wrong')
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
                    value={title}
                    onChange={handleChangeTitle}
                />

                    <input
                        placeholder='Description'
                        value={description}
                        onChange={handleChangeDescription}
                    />
                    <button className={classes.buttons} onClick={addNewTask}>Create task</button>

                </div>
                {TaskState.tasks.map(task => <TaskCard deleteTask={deleteTask} editTask={editTask} task={task} key={task.id}/>)}
            </div>
        )
    }
)

export default memo(MainPage)