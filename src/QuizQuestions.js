import { useState, React } from "react";
import Accordion from 'react-bootstrap/Accordion';
import _ from 'lodash';
import App from "./App";
import ReactDOM from 'react-dom';


export default function QuizQuestions() {
    const question = ["What is your skin type?", "What is your price range?", "What type of treatment are you looking for?", "What type of products are you looking for?"];

    const options = [
        ["Oily", "Dry", "Combination", "Normal"], 
        ["$", "$$", "$$$", "$$$$"], 
        ["Moisturizer", "Cleanser", "Toner", "Serum"],
        ["Paraben-free", "Fragrance-free", "Cruelty-free", "Vegan", "Hypoallergenic"]
    ];

    const userInput = {
        skin: '',
        price: '',
        treatment: '',
        type: ''
    };

    //allChoices
    const [choices, setChoices] = useState([]);
    const [number, setQuestionNumber] = useState(1);
    
    const numberOfOptions = options.length;
    const optionsDisplayed = options[choices -1];

    //setting the question displayed
    const numberOfQuestion = question.length;
    const questionDisplayed = question[number - 1];
    
    
    let allOptionsArray = options.map((option) => {
        return <button className="qb btn btn-outline-dark btn-md" key={option}>{option}</button>
    })
    
    const handClickNext = () => {
        if (numberOfQuestion == number) {
            setQuestionNumber(numberOfQuestion);
            setChoices(numberOfOptions);
        } else {
            setQuestionNumber(number + 1);
            setChoices(choices + 1);
        }

    }
    const handClickPrev = () => {
        if (number == 1) {
            setQuestionNumber(1);
            setChoices(1);
        } else {
            setQuestionNumber(number - 1);
            setChoices(choices - 1);
        }

    }


    return (
        <div className="container">
            <section className="form text-center">
                <hr />
                {/*Question prompst*/}
                <div className="text-center">
                    <h2 className="question border rounded-pill">{questionDisplayed}</h2>
                </div>

                {/*Form input here*/}
                <div>
                    {allOptionsArray}
                    
                </div>

                {/*Buttons at the bottem to navigate*/}
                <div>
                    <button className="btn btn-outline-dark btn-lg" onClick={handClickPrev}>Prev</button>
                    <button className="btn btn-outline-dark btn-lg" onClick={handClickNext}>Next</button>

                    {/*Put in results page link*/}
                    <button className="btn btn-outline-dark btn-lg" onClick={handClickNext}>Results</button>
                </div>
                <div className="num-question">
                    {number}/{numberOfQuestion}

                </div>
            </section>
        </div>
    )



}

// function QuizOptions(props) {

//     const options = props.options;

//     const button = options.map((option) => {
//         return <button className="qb btn btn-outline-dark btn-md">{option}</button>
//     })

//     return(
//         {button}
//     )


// }


// <QuizOptions options = {optionsDisplayed}/>
