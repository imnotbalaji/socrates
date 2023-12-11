import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchQuiz, updateQuiz } from "../../store/quiz"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom"
import './QuizShow.scss'
import NavBar from "../NavBar/NavBar"

const QuizShow = () => {
    const history = useHistory()
    const quiz = useSelector(state => state.questions)
    
    const { quizId } = useParams()
    const quizCover = useSelector(state => state.quizzes[quizId].coverURL);
    const quizTitle = useSelector(state => state.quizzes[quizId].title);
    const dispatch = useDispatch()

    const [question0, setQuestion0] = useState("")
    const [question1, setQuestion1] = useState("")
    const [question2, setQuestion2] = useState("")
    const [question3, setQuestion3] = useState("")
    const [question4, setQuestion4] = useState("")
    const [question5, setQuestion5] = useState("")
    const [question6, setQuestion6] = useState("")
    const [question7, setQuestion7] = useState("")
    const [question8, setQuestion8] = useState("")
    const [question9, setQuestion9] = useState("")

    useEffect(()=>{
        dispatch(fetchQuiz(quizId))
    }, [quizId, dispatch])

    const questionsList = quiz && Object.values(quiz)

    const questionbyIndex = (index) => {
      switch (index) {
        case 0: 
         return question0;
        case 1: 
         return question1;
        case 2: 
         return question2;
        case 3: 
         return question3;
         case 4: 
         return question4;
        case 5: 
         return question5;
        case 6: 
         return question6;
        case 7: 
         return question7;
        case 8: 
         return question8;
        case 9: 
         return question9
         default: 
         return null;
      }

    }

 

    const handleAnswerChange = (questionIndex, value) => {
        switch (questionIndex) {
          case 0:
            setQuestion0(prev_value => (prev_value === value)? "" : value);
            break;
          case 1:
            setQuestion1(prev_value => (prev_value === value)? "" : value );
            break;
          case 2:
            setQuestion2(prev_value => (prev_value === value)? "" : value);
            break;
          case 3:
            setQuestion3(prev_value => (prev_value === value)? "" : value );
            break;
          case 4:
            setQuestion4(prev_value => (prev_value === value)? "" : value );
            break;
          case 5:
            setQuestion5(prev_value => (prev_value === value)? "" : value );
            break;
          case 6:
            setQuestion6(prev_value => (prev_value === value)? "" : value );
            break;
          case 7:
            setQuestion7(prev_value => (prev_value === value)? "" : value );
            break;
          case 8:
            setQuestion8(prev_value => (prev_value === value)? "" : value);
            break;
          case 9:
            setQuestion9(prev_value => (prev_value === value)? "" : value);
            break;
          default:
            break;
        }
        
      };
      
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response={updates: [question0,question1,question2,question3,question4,question5,question6,question7,question8,question9]}
        await dispatch(updateQuiz(quizId, response))
        .then(history.push(`/results/${quizId}`))
    }

    return (
      <>
      <NavBar />
      
        <form className = "quiz-form" onSubmit={handleSubmit}>
          <div className="quiz-cover-image"> 
          <img src= {quizCover} />
          <h1>{quizTitle.slice(0,-5)}</h1>
          </div>
            
            {questionsList?.map((question, idx1)=>{
                return (
                    <div className={
                      "question "
                      + (questionbyIndex(idx1) ? "answered" : "unanswered")
                  }
                    >
                        <strong>{question?.question}</strong>
                        <div className ="options-area">
                        {question.options && question.options.map((option, idx2) => {
                            
                            return (
                                <div className = {
                                  "option " 
                                  + ((questionbyIndex(idx1) === option) 
                                   ? "selected" : "unselected")
                                }
                       
                                
                                onClick={(e)=>handleAnswerChange(idx1,e.target.innerText)} 

                                
                                >
                                    {/* <input 
                                        type="radio" 
                                        name={`${idx1}`} 
                                        value={option}
                                        onChange={(e)=>(handleAnswerChange(idx1, e.target.value))}>
                                          
                                        </input> */}
                                        {/* Let's see if i look up the question and see if the value of that option that i assign a class to it */}
                                        
                                    <p>{option}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                )
            })}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default QuizShow