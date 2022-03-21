import React from "react";
import classes from './mainPage.module.css'

const MainPage = (props) => {
    return (
        <div className={classes.mainPageWrapper}>

            {props.tasks.map((task) => (
                    <div className={classes.taskCard}>
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