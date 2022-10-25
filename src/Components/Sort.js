
import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../Context/FilterContext";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filteredProducts,
    gridView,
    setGridView,
    setListView,
    setSortCriteria,
  } = useFilterContext();
  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={gridView ? "sort-btn active" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={!gridView ? "sort-btn active" : "sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{filteredProducts.length} total products</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort">
            <select
              name="sort"
              id="sort"
              className="sort-selection--style"
              onChange={setSortCriteria}
            >
              <option value="lowToHigh">Price (Low-High)</option>
              <option value="#" disabled></option>
              <option value="highToLow">Price (High-Low)</option>
              <option value="#" disabled></option>
              <option value="ascName">Price (A-Z)</option>
              <option value="#" disabled></option>
              <option value="descName">Price (Z-A)</option>
              <option value="#" disabled></option>
            </select>
          </label>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
  }
`;
export default Sort;