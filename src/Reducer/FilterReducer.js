const filterReducer = (state, action) => {
    switch (action.type) {
      case "FILTER_PRODUCTS_REQUEST":
        console.log("In load", action.payload);
        return {
          ...state,
          filteredProducts: [...action.payload],
          allProducts: [...action.payload],
        };
      case "SET_GRID_VIEW":
        return {
          ...state,
          gridView: true,
        };
      case "SET_LIST_VIEW":
        return {
          ...state,
          gridView: false,
        };
      case "SET_SORT_CRITERIA":
        return {
          ...state,
          sortCriteria: action.payload,
        };
      case "SORT_PRODUCTS":
        let tempProducts = [...action.payload];
        let sortedProducts;
        const { sortCriteria } = state;
        const sortProducts = (a, b) => {
          if (sortCriteria === "lowToHigh") return a.price - b.price;
          if (sortCriteria === "highToLow") return b.price - a.price;
          if (sortCriteria === "ascName") return a.name.localeCompare(b.name);
          if (sortCriteria === "descName") return b.name.localeCompare(a.name);
        };
  
        sortedProducts = tempProducts.sort(sortProducts);
  
        return {
          ...state,
          filteredProducts: sortedProducts,
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;