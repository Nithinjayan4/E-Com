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

  if (property === "colors") {
    
    newVal = newVal.flat();
  }

  
  return(newVal = ["All",...new Set(newVal)]);
  
}  
  //unique data
  

  const categoryOnlyData = getUniqueData(allProducts,"category");
  const companyOnlyData = getUniqueData(allProducts,"company");
  const colorOnlyData = getUniqueData(allProducts,"color");
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
          {categoryOnlyData.map((category, index) => {
            // console.log(categoryOnlyData)
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={category}
                //className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {category}
                
              </button>
             
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {companyOnlyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorOnlyData.map((curColor, index) => {
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className="btnStyle"
                onClick={updateFilterValue}>
                {/* {color === curColor ? "" : null} */}
              </button>
            );
          })}
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 5rem 0;
display: flex;
flex-direction: column;
gap: 3rem;
h3 {
  padding: 2rem 0;
  font-size: bold;
}
.filter-search {
  input {
    padding: 0.6rem 1rem;
    width: 80%;
  }
}
.filter-category {
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    button {
      border: none;
      background-color: ${({ theme }) => theme.colors.white};
      text-transform: capitalize;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.btn};
      }
    }
    .active {
      border-bottom: 1px solid #000;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
}
.filter-company--select {
  padding: 0.3rem 1.2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
}
.filter-color-style {
  display: flex;
  justify-content: center;
}
.color-all--style {
  background-color: transparent;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
}
.btnStyle {
  width: 2rem;
  height: 2rem;
  background-color: #000;
  border-radius: 50%;
  margin-left: 1rem;
  border: none;
  outline: none;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
.active {
  opacity: 1;
}
.checkStyle {
  font-size: 1rem;
  color: #fff;
}
.filter_price {
  input {
    margin: 0.5rem 0 1rem 0;
    padding: 0;
    box-shadow: none;
    cursor: pointer;
  }
}
.filter-shipping {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.filter-clear .btn {
  background-color: #ec7063;
  color: #000;
}

`

export default FilterSection