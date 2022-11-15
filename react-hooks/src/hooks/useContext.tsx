import { createContext, useContext } from 'react';

interface UseContextComponentProps {
    title: string;
}

export const AppContext = createContext(null);
export const UseContextComponent = ({title}:UseContextComponentProps) => {
    return (
        <>
            <h2>{title}</h2>
            <AppContext.Provider value={{title: 'Hello! there'}}>
                <LevelOneComponent />
            </AppContext.Provider>
        </>
    );
}


const LevelOneComponent = () => {
    return (
        <div>
            <LevelTwoComponent />
        </div>
    );
}

const LevelTwoComponent = () => {
    const {title} = useContext(AppContext);
    return (
        <>
            <p>{title}</p>
        </>
    );
}