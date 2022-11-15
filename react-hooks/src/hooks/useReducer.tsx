import { useReducer } from 'react';

interface UseReducerComponentProps {
    title: string;
}
interface CountState {
    count: number;
}
interface CountAction {
    type: CountActionKind;
    payload: number;
}

enum CountActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE'
}


const counterReducer = (state:CountState, action: CountAction) => {
    const { type, payload } = action;
    switch(type) {
        case CountActionKind.INCREASE:
            return {
                ...state,
                count: state.count + payload,
            }
        case CountActionKind.DECREASE:
            return {
                ...state,
                count: state.count - payload,
            }
        default :
            return state;
    }
}

export const UseReducerComponent = ({title}:UseReducerComponentProps) => {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0
    });
    const {count} = state;
    return (
        <>
            <h2>{title}</h2>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: CountActionKind.INCREASE, payload: 1})}>+</button>{' '}
            <button onClick={() => {
                if(count === 0 ) return;
                dispatch({type: CountActionKind.DECREASE, payload: 1})
            }}>-</button>
        </>
    );
}