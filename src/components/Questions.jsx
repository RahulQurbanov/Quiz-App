import { useEffect, useState } from "react";
import Question from "./Question";
import data from "./Question.json";
const questions=data.questions;
export default function Questions(){

    const [selcetedQuestion,setSelectedQuestion] = useState(questions);
    const [answer,setAnswer] = useState(questions.correct_answer);
    const [count,setCount] = useState(0);
    const [questionNumber,setQuestionNumber] = useState(0)
    useEffect(()=>{
     setAnswer(questions[questionNumber].correct_answer)
    },[questionNumber])

    return(
       <div className="bg-cyan-600 h-screen flex flex-col items-center justify-center">
        <p className="absolute top-36 right-52 text-3xl text-indigo-700 font-bold">Correct Answer:{count}</p>
        <header>
            <h1 className="text-4xl text-green-300">Question {questionNumber+1}</h1>
        </header>
        <main>
        <Question setCount={setCount} answer={answer} setQuestionNumber={setQuestionNumber} question={selcetedQuestion[questionNumber]}></Question>
        </main>
       </div>
    )
}