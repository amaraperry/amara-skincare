import React, { useState } from "react";
import { AllCards } from "./ProductCards.js";
import { SortFilterForm } from './SortFilter.js';
import _ from 'lodash';
import { QuizTopPicks } from './QuizResults.js';
import { Homepage, NavBar, Footer } from './homepage.js';
import QuizQuestions from './QuizQuestions.js';
import { ComparisonTable } from './ProductComparison.js';

// props.data = the whole PRODUCTS_LIST json (array of objects)
function App(props) {

  // view data set is:
  //console.log(props.data)

  // how its getting displayed

  const [order, setOrder] = useState(props.data);
  const [filterOptions, setFilterOptions] = useState({
    suncare: false,
    toner: false,
    cleanser: false,
    moisturizer: false,
    serum: false,
    dry: false,
    combination: false,
    mature: false,
    oily: false,
    normal: false,
    "fragrance-free": false,
    "cruelty-free": false,
    "paraben-free": false,
    vegan: false,
    hypoallergenic: false
  });


  const applySort = (value) => {
    let newArray = []
    if (value === '') {
      setOrder(_.sortBy(order, ['id']))
    } else if (value === "1") {
      setOrder(_.sortBy(order, ['price']))
    } else if (value === "2") {
      setOrder(newArray = _.reverse(_.sortBy(order, ['price'])))
    }
  }

  const applyFilters = (e) => {
    let filteredData = props.data.filter((product) => {
      if (filterOptions.dry) {
        if (!product.skin.includes("dry")) {
          return false;
        }
      }
      if (filterOptions.mature) {
        if (!product.skin.includes("mature")) {
          return false;
        }
      }
      if (filterOptions.oily) {
        if (!product.skin.includes("oily")) {
          return false;
        }
      }
      if (filterOptions.normal) {
        if (!product.skin.includes("normal")) {
          return false;
        }
      }
      if (filterOptions["fragrance-free"]) {
        if (!product.other.includes("fragrance-free")) {
          return false;
        }
      }
      if (filterOptions["cruelty-free"]) {
        if (!product.other.includes("cruelty-free")) {
          return false;
        }
      }
      if (filterOptions["paraben-free"]) {
        if (!product.other.includes("paraben-free")) {
          return false;
        }
      }
      if (filterOptions.vegan) {
        if (!product.other.includes("vegan")) {
          return false;
        }
      }
      if (filterOptions.hypoallergenic) {
        if (!product.other.includes("hypoallergenic")) {
          return false;
        }
      }
      return true;
    })
    setOrder(filteredData);
  }

  const handleCheckbox = (e) => {
    let name = e.target.name;
    setFilterOptions({ ...filterOptions, [name]: !filterOptions[name] })
  }


  // sort data to decide what content gets rendered, not when they click on the button
  // state updates to different order value
  // calling set state re-renders component to complete sorting


  // const handleRadio = (e) => {
  //   let productType = e.target.id;
  //   setFilterOptions({...filterOptions, })
  // }

  return (
    <div className="container">
      <NavBar />
      <SortFilterForm applySortCallback={applySort} applyFilterCallback={applyFilters} data={props.data} filterOptions={filterOptions} handleCheckbox={handleCheckbox} />
      <AllCards data={order}/>
      <Footer />
    </div>
  );
}

export default App;