import React from "react";
import { createContext, useState } from "react";


export let langContext = createContext(true);

export default function LangContextProvider(props) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    const [isEng, setIsEng] = useState(true);
    const changeLang = () => {
        setIsEng(!isEng);
    }

    return <langContext.Provider value={{isEng, changeLang, isOpen, toggleOpen}}>
        {props.children}
    </langContext.Provider>
}