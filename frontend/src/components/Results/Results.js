import { useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { useDispatch } from "react-redux"
import { fetchQuiz } from "../../store/quiz"
import { useEffect } from "react"
import { useState } from "react"
import "./Results.scss"

const Results = () => {
    const quiz = useSelector(state => state.questions)

    const { quizId } = useParams()
    const dispatch = useDispatch()

    const questionsList = quiz && Object.values(quiz)

    useEffect(()=>{
        dispatch(fetchQuiz(quizId))
     

    }, [quizId, dispatch])

    useEffect(() => {
        const correctCount = questionsList?.filter(
          (question) => question?.response === question?.answer
        ).length;
    
        setCorrect(correctCount);
    }, [questionsList]);

    
    const[correct, setCorrect] = useState(0)
    

    return (
        <div className="results">
            <h2>Your Results</h2>
            <div className="results-statistics">
                <p>You Have Answered {correct} Out of 10 questions correctly</p>
            </div>
        {questionsList?.map((question, idx1)=>{
                return (
                    <div className = "question">
                        <p>{`${idx1+1} ) ${question?.question}`}</p>
                        <div className="options-area">
                        {question.options && question.options.map((option, idx2) => {
                            
                            return (
                                <div 
                                className={
                                    "option "
                                + ((question?.answer === option) ? "correct" : "")
                                + " "
                                + ((question?.response === option) ? "response" :"" )
                                }
                                
                                >
                                    <p>{option}</p>
                                </div>
                            )
                        })}
                        </div>
                        <p>Your Answer: {question?.response}</p>
                        <p>Correct Answer: {question?.answer} </p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Results