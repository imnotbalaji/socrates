import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchQuiz,  } from "../../store/quiz"
const QuizShow = () => {
    const { quizId } = useParams()
    const dispatch = useDispatch()

    return (
        <>
        </>
    )
}

export default QuizShow