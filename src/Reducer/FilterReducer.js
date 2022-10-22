const filterReducer = (state,action) => {
    switch(action.type){
        case "FILTER_PRODUCTS_REQUEST" : return{
            ...state,
            filteredProducts : [...action.payload],
            allProducts : [...action.payload]
        }
        default : return state
    }
}

export default filterReducer