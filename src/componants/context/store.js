import React from "react";
import { createContext, useState } from "react";


export let langContext = createContext(true);

export default function LangContextProvider(props) {
    const [isEng, setIsEng] = useState(true);
    const changeLang = () => {
        setIsEng(!isEng);
    }

    return <langContext.Provider value={{isEng, changeLang}}>
        {props.children}
    </langContext.Provider>
}