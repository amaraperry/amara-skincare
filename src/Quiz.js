import { useState, React } from "react";
import Accordion from 'react-bootstrap/Accordion';
import _ from 'lodash';
import App from "./App";
import ReactDOM from 'react-dom';
import QuizQuestions from "./QuizQuestions";


export default function Quiz(){
    return(
        <div className="container">
            <section className="form text-center">
                    <hr />
                    <section className="quizStarter">
                        <h1>Take a Quiz to Find the Right Products for You</h1>
                        <h2 className="start-quiz">This short quiz will help us find all the right skincare products to make you glow!</h2>
                        <section className="buttons">
                            <button to="/QuizQuestions" className="btn btn-primary btn-lg qb" >Take the quiz</button>
                        </section>

                    </section>

                </section>

        </div>

    )
}