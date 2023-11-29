import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchQuiz } from "../../store/quiz"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import './QuizShow.css'

const QuizShow = () => {
    const quiz = useSelector(state => state.quizzes)
    const { quizId } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchQuiz(quizId))
    }, [quizId, dispatch])

    const questionsList = quiz && Object.values(quiz.questions)

    return (
        <form>
            
            {questionsList?.map((question)=>{
                return (
                    <>
                        <li>{question.question}</li>
                        {question.options.map(option => {
                            
                            return (
                                <div className="optionsDiv">
                                    <input type="radio"></input>
                                    <p>{option}</p>
                                </div>
                            )
                        })}
                    </>
                )
            })}
        </form>
    )
}

export default QuizShow