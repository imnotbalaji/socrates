import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchQuiz, updateQuiz } from "../../store/quiz"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom"
import './QuizShow.css'

const QuizShow = () => {
    const history = useHistory()
    const quiz = useSelector(state => state.questions)
    const { quizId } = useParams()
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

    const handleAnswerChange = (questionIndex, value) => {
        switch (questionIndex) {
          case 0:
            setQuestion0(value);
            console.log(setQuestion0)
            break;
          case 1:
            setQuestion1(value);
            break;
          case 2:
            setQuestion2(value);
            break;
          case 3:
            setQuestion3(value);
            break;
          case 4:
            setQuestion4(value);
            break;
          case 5:
            setQuestion5(value);
            break;
          case 6:
            setQuestion6(value);
            break;
          case 7:
            setQuestion7(value);
            break;
          case 8:
            setQuestion8(value);
            break;
          case 9:
            setQuestion9(value);
            break;
          default:
            break;
        }
      };
      
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response={updates: [question0,question1,question2,question3,question4,question5,question6,question7,question8,question9]}
        console.log(response)
        await dispatch(updateQuiz(quizId, response))
        .then(history.push(`/results/${quizId}`))
    }

    return (
        <form onSubmit={handleSubmit}>
            
            {questionsList?.map((question, idx1)=>{
                return (
                    <>
                        <li>{question?.question}</li>
                        {question.options && question.options.map((option, idx2) => {
                            
                            return (
                                <div className="optionsDiv">
                                    <input 
                                        type="radio" 
                                        name={`${idx1}`} 
                                        value={option}
                                        onChange={(e)=>(handleAnswerChange(idx1, e.target.value))}></input>
                                    <p>{option}</p>
                                </div>
                            )
                        })}
                    </>
                )
            })}
            <button type="submit">Submit</button>
        </form>
    )
}

export default QuizShow