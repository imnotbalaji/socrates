import { Link } from 'react-router-dom'

const QuizItem = ({quiz}) => {
    // questionsArray = quiz.questions

    return (
        <>
            <div className="quiz.title">
                <Link to={`/${quiz._id}`}>{quiz.title} </Link>
            </div>  
        </>
    )
}

export default QuizItem