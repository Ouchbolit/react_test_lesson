import React, {memo} from "react";
import classes from './promoBanner.module.sass'
import frog from '../../../images/bonuses/frog.svg'

const PromoBanner = (props) => {

    return (
        <div className={classes.PromoBannerWrapper}>
            <div className={classes.PromoBannerInfo}>
                <p className={classes.PromoBannerInfo__p}>sign up and<br/>take your<br/><span className={classes.PromoBannerInfo__span}>50 fs</span></p>
                <button className={classes.PromoBannerInfo__button}>Activate</button>
            </div>
                <img className={classes.PromoBannerInfo__image} src={frog} alt=""/>
        </div>
    )
}
export default memo(PromoBanner)