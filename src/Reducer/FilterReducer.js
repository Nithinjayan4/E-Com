const filterReducer = (state, action) => {
    switch (action.type) {
      case "FILTER_PRODUCTS_REQUEST":
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
        const {filteredProducts, sortCriteria} = state
        let tempProducts = [...filteredProducts];
        let sortedProducts;
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
  
      case "SET_FILTER_VALUE" : 
      const {name,value} = action.payload;
      return {
        ...state,
        filters : {
          ...state.filters,
          [name] : value
        }
      }
      
      case "FILTER_PRODUCTS" :
        const {allProducts} =state;
        let tempFilteredProducts = [...allProducts]

         const  {text,category} = state.filters;
        
        if(text){
          tempFilteredProducts = tempFilteredProducts.filter((product)=> product.name.toLowerCase().includes(text))
        }


         if (category){
           tempFilteredProducts=tempFilteredProducts.filter((curElem)=>{
             return curElem === category;
           })
       }
  
        return {
          ...state,
          filteredProducts : tempFilteredProducts
        }
        
      default:
        return state;
    }
  };
  
  export default filterReducer;