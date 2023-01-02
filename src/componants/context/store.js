import React from "react";
import { createContext, useState } from "react";


export let langContext = createContext(true);

export default function LangContextProvider(props) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    const [isEng, setIsEng] = useState(false);
    const changeLang = () => {
        setIsEng(!isEng);
    }

    const [invoiceId, setInvoiceId] = useState();

    return <langContext.Provider value={{isEng, changeLang, isOpen, toggleOpen, setInvoiceId}}>
        {props.children}
    </langContext.Provider>
}