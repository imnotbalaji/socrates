
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchQuizzes, getQuizzes } from "../../store/quiz"
import { useDispatch } from "react-redux"
import QuizItem from "../QuizItem/QuizItem"
import { useState } from "react"
import "./Quizzes.scss"
import { Link } from "react-router-dom/cjs/react-router-dom"
import NavBar from "../NavBar/NavBar"

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
        <>
        
        <NavBar />
        <div className="quiz-index">
            <Link to="/createQuiz">
                <div className ="createQuiz-link">
                    Create a new Quiz
                </div>
            </Link>
            {quizList?.map(quiz => <QuizItem key={quiz._id} quiz={quiz} questions={questions}/>)}
            { loading ? 
            <div className = "loading-bar"> Loading</div> : ""}
           
        </div>
        </>
    )
}

export default Quizzes