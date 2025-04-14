// import classes from './classes.module.scss';

import { AppButton } from "shared/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice";
import { StateSchema } from "app/providers/store/config/StateSchema";
import { getCounterValue } from "../model/selectors/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment());
    }

    const decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1>value = {counterValue}</h1>
            <AppButton onClick={increment}>
                increment
            </AppButton>
            <AppButton onClick={decrement}>
                decrement
            </AppButton>
        </div>
    );
};

