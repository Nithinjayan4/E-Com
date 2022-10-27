import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../Context/FilterContext'

const FilterSection = () => {
  const {filters : {searchText} , allProducts, updateFilterValue} = useFilterContext()
  //unique data of each field
const getUniqueData=(data,property)=>{
  let newVal =data.map((curElem)=>{

    return curElem[property];

  });
  
  newVal = [...new Set(newVal)]
  console.log(newVal)
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
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding : 9rem 0;
`

export default FilterSection