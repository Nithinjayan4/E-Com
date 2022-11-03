import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer.js";


const FilterContext = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sortCriteria: "lowToHigh",
  filters : {
    searchText : "",
    category : ""
  }
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

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch ({type : "SET_FILTER_VALUE", payload : {name,value}})
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS_REQUEST", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type : "FILTER_PRODUCTS"})
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sortCriteria, products ,state.filters]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, setSortCriteria, updateFilterValue}}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };