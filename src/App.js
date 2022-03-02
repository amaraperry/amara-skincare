import React, { useState} from "react";
import { AllCards } from "./ProductCards.js";
import { SortFilter } from './SortFilter.js';
import _ from 'lodash';
import { QuizTopPicks } from './QuizResults.js';
import { Homepage, NavBar, Footer } from './homepage.js';
import QuizQuestions from './QuizQuestions.js';
import { ComparisonTable } from './ProductComparison.js';

// props.data = the whole PRODUCTS_LIST json (array of objects)
function App(props) {

  // view data set is:
  //console.log(props.data)

  const [order, setOrder] = useState(props.data);

  const applySort = (value) => {
    let newArray = []
    if (value === '') {
      setOrder(props.data);
    } else if (value === "1") {
      setOrder(_.sortBy(props.data, ['price']))
    } else if (value === "2") {
      setOrder(newArray = _.reverse(_.sortBy(props.data, ['price'])))
    }
  }

return (
  <div className="container">
    <NavBar />
    <SortFilter applySortCallback={applySort} data={props.data} />
    <AllCards data={order} />
    <Footer />
  </div>
);
}

export default App;