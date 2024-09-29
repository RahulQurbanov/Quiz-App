import { useState } from "react"

export default function Question({question,setCount,answer,setQuestionNumber}){
   
   const [selectedAnswer,setSelectedAnswer] = useState();

   function handleClick(answer){
      setSelectedAnswer(answer)
   }
   function handleSubmit(){
    if (answer==selectedAnswer) {
      setCount(prev=>prev+1)
    }
    setQuestionNumber(prev=>prev+1)
   }

    return(
        <div className="flex flex-col">
          <h2 className="mt-5 text-2xl font-bold">{question.question}</h2>
          <div className="grid grid-cols-2 mt-5 gap-4 cursor-pointer">
            <p onClick={()=>handleClick("A")} className={`w-full border-2 px-6 py-4 ${selectedAnswer=="A"?"border-green-400":""}`}>{question.options.A}</p>
            <p onClick={()=>handleClick("B")} className={`w-full border-2 px-6 py-4 ${selectedAnswer=="B"?"border-green-400":""}`}>{question.options.B}</p>
            <p onClick={()=>handleClick("C")} className={`w-full border-2 px-6 py-4 ${selectedAnswer=="C"?"border-green-400":""}`}>{question.options.C}</p>
            <p onClick={()=>handleClick("D")} className={`w-full border-2 px-6 py-4 ${selectedAnswer=="D"?"border-green-400":""}`}>{question.options.D}</p>
          </div>
          <button onClick={handleSubmit} className="px-8 py-4 bg-green-400 mt-4 text-white font-bold rounded-lg">Submit</button>
        </div>
    )
}