import { Link } from 'react-router-dom'
import "./QuizItem.scss"
import { useDispatch } from 'react-redux'
import { deleteQuiz } from '../../store/quiz'
const QuizItem = ({quiz}) => {
    const dispatch = useDispatch()
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteQuiz(quiz._id))
    }
    return (
        <div className = "quiz-card">
            
            <img src ={quiz.coverURL}/> 
            <div className="quiz-title">
                <Link to={`/quizzes/${quiz._id}`}>{quiz.title.slice(0,-5)} </Link>
                <button onClick={handleDelete}> Delete Quiz</button>
            </div>  
        </div>
    )
}

export default QuizItem