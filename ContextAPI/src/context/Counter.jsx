import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export default function CounterProvider (props) {
    const [count, setCount] = useState(5);
    return(
        <CounterContext.Provider value={{count, setCount}}>
        {props.children}
        </CounterContext.Provider>
    )
}