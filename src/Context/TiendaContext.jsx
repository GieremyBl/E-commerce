import React, { createContext } from "react";
import all_products from '../Components/Assets/all_product';

export const TiendaContext = createContext(null);

const TiendaContextProvider = (props) => {
    const contextValue = { all_products };

    return(
        <TiendaContext.Provider value = {contextValue}>
            {props.children}
        </TiendaContext.Provider>
    )
};

export default TiendaContextProvider;