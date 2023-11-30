
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchQuizzes, getQuizzes } from "../../store/quiz"
import { useDispatch } from "react-redux"
import QuizItem from "../QuizItem/QuizItem"
import { useState } from "react"

const Quizzes = () => {
    
    const loading = useSelector(state => state.loading)
    const quizzes = useSelector(state => state.quizzes)
    const questions = useSelector(state => state.quizzes.questions)
    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(fetchQuizzes())


    }, [dispatch])

    const quizList = quizzes && Object.values(quizzes)
    
    return (
        <div>
            {quizList?.map(quiz => <QuizItem key={quiz._id} quiz={quiz} questions={questions}/>)}
            { loading ? "Loading" : ""}
        </div>
    )
}

export default Quizzes