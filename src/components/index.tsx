import React from 'react';
import classes from "./counter.module.scss";
import { NavLink } from "react-router-dom";
import { paths } from "../router/routes";

export const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div className={classes.container}>
            <span>{count}</span>
            <br/>
            <button onClick={() => setCount(count + 1)}>inc</button>
            <br/>
            app
            <br/>
            <NavLink to={paths.ROOT}>root</NavLink>
            <br/>
            <NavLink to={paths.ABOUT}>about</NavLink>
        </div>
    );
};
