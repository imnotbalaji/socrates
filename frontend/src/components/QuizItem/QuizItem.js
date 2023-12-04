import { Link } from 'react-router-dom'
import "./QuizItem.scss"

const QuizItem = ({quiz}) => {
    // questionsArray = quiz.questions

    return (
        <div className = "quiz-card">
            
            <img src ={quiz.coverURL}/> 
            <div className="quiz-title">
                <Link to={`/quizzes/${quiz._id}`}>{quiz.title.slice(0,-5)} </Link>
            </div>  
        </div>
    )
}

export default QuizItem