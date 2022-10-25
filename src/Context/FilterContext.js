import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer.js";


const FilterContext = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sortCriteria: "lowToHigh",
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const setSortCriteria = (e) => {
    dispatch({ type: "SET_SORT_CRITERIA", payload: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS_REQUEST", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS", payload: products });
  }, [state.sortCriteria, products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, setSortCriteria }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };