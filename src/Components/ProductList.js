import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import GridView from "./GridView"
import ListView from "./ListView";

const ProductList = () => {

  const {filteredProducts,gridView} = useFilterContext()
  return gridView ? <GridView products={filteredProducts} /> : <ListView  products={filteredProducts} />
}

export default ProductList