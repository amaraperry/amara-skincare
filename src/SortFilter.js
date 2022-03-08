import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import _ from 'lodash';


// takes in entire props.data as props.data
export function SortFilterForm(props) {

    const [valueSelected, setValueSelected] = useState("");

    const handleValue = (event) => {
        let num = event.target.value;
        if (num === "") {
            num = "";
        }
        setValueSelected(num);
        props.applySortCallback(num)
    }


    let categories = ['Product Type', 'Skin Type', 'Ingredients'];

    let categoryTitleArray = categories.map((title) => {
        return (<h3 className="category">{title}</h3>)
    })

    let typeArray = props.data.map((obj) => {
        return obj.type;
    })
    let uniqueType = [...new Set(typeArray)]

    let skinArray = props.data.map((obj) => {
        return obj.skin;
    })
    let flattenSkin = [].concat(...skinArray)
    let uniqueSkin = [...new Set(flattenSkin)]

    let otherArray = props.data.map((obj) => {
        return obj.other;
    })
    let flattenOther = [].concat(...otherArray)
    let uniqueOther = [...new Set(flattenOther)]

    let checkboxforEach = (array) => {
        let typeCheckbox = array.map((item, index) => {
            return (
                <div className="form-check" key={index}>
                    <input className="form-check-input" onChange={props.handleCheckbox} name={item} type="checkbox" checked={props.filterOptions[item]} id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor={item}>
                        {item}
                    </label>
                </div>
            )
        })
        return typeCheckbox
    }

    let radioforEach = (array) => {
        let radioCheckbox = array.map((item, index) => {
            return (
                <div className="form-check" key={index}>
                    <input className="form-check-input" onChange={props.handleCheckbox} name="radio" type="radio" checked={props.filterOptions[item]} id={item} />
                    <label className="form-check-label" htmlFor={item}>
                        {item}
                    </label>
                </div>
            )
        })
        return radioCheckbox
    }



    return (
        <div>
            <header className="text-center">
                <h1 className="page-header">View the Award Winning Products List</h1>
                <select className="form-select form-select-sm d-inline-block" aria-label=".form-select-sm example"
                    value={valueSelected} onChange={handleValue}>
                    <option value="">Sort</option>
                    <option value="1">Price ($ to $$$)</option>
                    <option value="2">Price ($$$ to $)</option>
                </select>
            </header>

            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filter Products</Accordion.Header>
                    <Accordion.Body>
                        <div className="check-container">
                        <div className="one-checkbox col-md-4">
                            {categoryTitleArray[0]}
                            {radioforEach(uniqueType)}
                        </div>
                        <div className="one-checkbox col-md-4">
                            {categoryTitleArray[1]}
                            {checkboxforEach(uniqueSkin)}
                        </div>
                        <div className="one-checkbox col-md-4" >
                            {categoryTitleArray[2]}
                            {checkboxforEach(uniqueOther)}
                        </div>
                        </div>
                        <button onClick={props.applyFilterCallback} className="btn btn-outline-dark btn-sm submit">Submit</button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )

}

// concatenate into one array: map((e, i) => e + array2[i]); console. log(newArray);
// takes in props.data, which is entire data set, as dataset={props.data}
// export function AllFilters(props) {

//     const [checkbox, setCheckbox] = useState(false);

//     let categories = ['Product Type', 'Skin Type', 'Ingredients'];

//     let categoryTitleArray = categories.map((title) => {
//         return (<h3 className="category">{title}</h3>)
//     })

//     let typeArray = props.data.map((obj) => {
//         return obj.type;
//     })
//     let uniqueType = [...new Set(typeArray)]

//     let skinArray = props.data.map((obj) => {
//         return obj.skin;
//     })
//     let flattenSkin = [].concat(...skinArray)
//     let uniqueSkin = [...new Set(flattenSkin)]


//     let otherArray = props.data.map((obj) => {
//         return obj.other;
//     })
//     let flattenOther = [].concat(...otherArray)
//     let uniqueOther = [...new Set(flattenOther)]

//     const handleCheckboxes = (event) => {
//         let checked = event.target.checked;
//         if (checked === true) {
//             return setCheckbox(true);
//         } else {
//             return setCheckbox(false);
//         }
//     }

//     let checkboxforEach = (array) => {
//         let typeCheckbox = array.map((item, index) => {
//             return (
//                 <div className="form-check" key={index}>
//                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                     <label className="form-check-label" htmlFor={item}>
//                         {item}
//                     </label>
//                 </div>
//             )
//         })
//         return typeCheckbox
//     }

//     return (

//         <Accordion defaultActiveKey="0" flush>
//             <Accordion.Item eventKey="0">
//                 <Accordion.Header>Filter Products</Accordion.Header>
//                 <Accordion.Body>
//                     <div className="one-checkbox col-md-3">
//                         {categoryTitleArray[0]}
//                         {checkboxforEach(uniqueType)}
//                     </div>
//                     <div className="one-checkbox col-md-3">
//                         {categoryTitleArray[1]}
//                         {checkboxforEach(uniqueSkin)}
//                     </div>
//                     <div className="one-checkbox col-md-3" >
//                         {categoryTitleArray[2]}
//                         {checkboxforEach(uniqueOther)}
//                     </div>
//                 </Accordion.Body>
//             </Accordion.Item>
//         </Accordion>

//     )
// }
