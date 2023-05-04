import React, {useContext} from 'react';
import {AppContext} from '../App';

export const UseContext = () => {
    const {title} = useContext(AppContext);
    return (
        <>
            <h2>Context API Experiment - {title}</h2>
        </>
    );
}