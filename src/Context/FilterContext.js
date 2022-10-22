import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer.js";

const FilterContext = createContext();

const initialState = {
    filteredProducts : [],
    allProducts : []
   
}

const FilterContextProvider = ({children}) => {

    const {products} = useProductContext()

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        dispatch({type : "FILTER_PRODUCTS_REQUEST",payload : products})
      }, [products])
    
    return <FilterContext.Provider value={{...state}}>
        {children}
    </FilterContext.Provider>
}

const useFilterContext = () => {
    return useContext(FilterContext)
}

export {FilterContextProvider,useFilterContext}