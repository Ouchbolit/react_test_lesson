import React, {useEffect, useRef, useState} from "react";
import classes from './mainPage.module.css'
import {TASK_TEST_LIST} from "../../../constants";

const MainPage = (props) => {

    // const inputRef = useRef()
    //
    // const handleClickUncontrolled = () => {
    //     console.log(inputRef.current.value)
    // }

    const [value, setValue] = useState('')

    const handleChangeControlled = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const handleClickControlled = () => {
        const currentTasks = props.tasks
        currentTasks.push({
            id: currentTasks.length + 1,
            title: value,
            description: 'ЗАЧЕМ ЖИТЬ ЕСЛИ ЕСТЬ МИРЭА',
            deadline: new Date(),
        })
        console.log(value)
    }

    return (
        <div className={classes.mainPageWrapper}>

            <div>
                {/*<div style={{marginTop: 10, display: 'flex'}}>*/}
                <input placeholder="Controlled" value={value} onChange={handleChangeControlled}/>
                <button onClick={handleClickControlled}>Click me</button>
            </div>

            {props.tasks.map((task) => (
                    <div className={classes.taskCard} key={task.id}>
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                        <div>20.03.2022 17:00</div>
                    </div>
                )
            )}

            {/*{JSON.stringify(props)}*/}

        </div>
    )
}

export default MainPage