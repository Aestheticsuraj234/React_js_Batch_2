import { useState, createContext } from "react";


const GlobalContext = createContext();


const GlobalProvider = ({children}) =>{
    const UserName = "John Doe";


    return (
        <GlobalContext.Provider value={{UserName}}>
            {children}
        </GlobalContext.Provider>
    )
}


export {GlobalProvider, GlobalContext}

