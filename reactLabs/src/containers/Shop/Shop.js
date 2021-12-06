import React from "react";
import { useState, useEffect } from "react";
import {
  CardWrapper,
} from "./Shop.styled";
import { FruitCardStorage } from "components/FruitStorage/FruitStorage";
import { FilterInput } from "components/Filter/FilterInput";
import { SearchWrapper } from "containers/SearchPannel/SearchPannel.styled";


export const Shop = () => {
  const [filterName, setFilterName] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState(undefined);
  const [filters, setFilters] = useState({name: ""});

  useEffect(() => {
      setFilters({
          name: filterName,
          type: filterType,
          price: filterPrice
      })
  }, [filterName, filterType, filterPrice])

  return (<div style={{width:"100vw"}}>
    <SearchWrapper>
              <FilterInput id="name" placeholder="Enter name..."
                           onSearch={(value) => setFilterName(value)}/>
              <FilterInput id="type" placeholder="Enter type..."
                           onSearch={(value) => setFilterType(value)}/>
              <FilterInput id="price" placeholder="Enter max price..."
                           onSearch={(value) => setFilterPrice(value)}/>
         </SearchWrapper>
        <CardWrapper>
          <FruitCardStorage filters={filters}/>
        </CardWrapper>
      </div>
  )
}



export default Shop;