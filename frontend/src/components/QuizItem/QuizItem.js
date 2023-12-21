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
            
            <Link to={`/quizzes/${quiz._id}`}>
                <img src ={quiz.coverURL}/> 
                <div className="quiz-title">
                    {quiz.title.slice(0,-5)} 
                </div>
            </Link>  
            <div className='deleteButton'>
                <button onClick={handleDelete}>X</button>
            </div>
        </div>
    )
}

export default QuizItem