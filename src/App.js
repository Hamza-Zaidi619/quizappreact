import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Array from './component/Array';

function App() {
  // const[count,setcount]=useState(0)
  // const

  // let add=()=>{
  //   setcount(count+1)
  // }

  //=========================quiz app================
  const [questions, setQuestions] = useState([
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },


  ])

  const[indexnumber,setindexnumber]=useState(0)
  const[score,setscore]=useState(0)
const [result,setresult]=useState(false)

  let checkans=(selected,correctanswer)=>{
    if(selected==correctanswer){
      setscore(score+1)
    }
    if(indexnumber+1==questions.length){
      setresult(true)
    }

    setindexnumber(indexnumber+1)

  }

  return (
    <div className="App">
      {/* <header className="App-header">
      <p>{count}</p>
      <button onClick={add}>upgrade</button>
      </header> */}
      {/* <Array/> */}
      
       {  result? <h1 className='score'>YOUR SCORE IS: {score}</h1>:<div>
      <h2 className='quest'>Q: {questions[indexnumber].question}</h2>

            { 
              questions[indexnumber].options.map((e,i) => {
              return(<div key={i}>
                <button className='options' onClick={()=>{checkans(e,questions[indexnumber].answer)}}>{e}</button>
                </div>
              )
              })
            }
          
       

      </div>
}
    </div>
  );
}

export default App;
