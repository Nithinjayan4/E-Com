import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../Context/FilterContext'

const FilterSection = () => {
  const {filters : {searchText} , allProducts,category, updateFilterValue} = useFilterContext()
  //unique data of each field
const getUniqueData=(data,property)=>{
  let newVal =data.map((curElem)=>{

    return curElem[property];

  });
  
  return(newVal = ["All",...new Set(newVal)]);
  
}  
  //unique data
  

  const categoryOnlyData = getUniqueData(allProducts,"category");
  return (
    <Wrapper>
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" name="searchText" value={searchText} onChange={updateFilterValue} placeholder="SEARCH" />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding : 9rem 0;
`

export default FilterSection