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
            <Link to={`/quizzes/${quiz._id}`}>
                <div className="quiz-title">
                    {quiz.title.slice(0,-5)} 
                    <button onClick={handleDelete}> Delete Quiz</button>
                </div>
            </Link>  
        </div>
    )
}

export default QuizItem