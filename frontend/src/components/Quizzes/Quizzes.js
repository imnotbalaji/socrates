
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchQuizzes, getQuizzes } from "../../store/quiz"
import { useDispatch } from "react-redux"
import QuizItem from "../QuizItem/QuizItem"

const Quizzes = () => {
    
    const quizzes = useSelector(getQuizzes)
    const questions = useSelector(state => state.quizzes.questions)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchQuizzes())
    }, [dispatch])

    const quizList = quizzes && Object.values(quizzes)
    
    return (
        <>
            {quizList.map(quiz => <QuizItem key={quiz._id} quiz={quiz} questions={questions}/>)}
        </>
    )
}

export default Quizzes