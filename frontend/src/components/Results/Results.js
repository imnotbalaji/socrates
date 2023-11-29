import { useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { useDispatch } from "react-redux"
import { fetchQuiz } from "../../store/quiz"
import { useEffect } from "react"

const Results = () => {
    const quiz = useSelector(state => state.quizzes)
    const { quizId } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchQuiz(quizId))
    }, [quizId, dispatch])

    const questionsList = quiz?.questions && Object.values(quiz.questions)

    return (
        <>
        
        </>
    )
}

export default Results