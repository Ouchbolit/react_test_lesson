import React, {memo} from "react";
import classes from './Bonuses.module.sass'
import PromoBanner from "./promoBanner/PromoBanner";

const Bonuses = (props) => {

    return (
        <div className={classes.bonusesWrapper}>
            <div className={classes.bonusesContent}>
                <PromoBanner/>
                <PromoBanner/>
                <PromoBanner/>
                <PromoBanner/>
            </div>
        </div>
    )
}
export default memo(Bonuses)