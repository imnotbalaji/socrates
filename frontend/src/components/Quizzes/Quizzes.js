import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchQuizzes } from "../../store/quiz"
import { useDispatch } from "react-redux"

const Quizzes = () => {
    const quizzes = useSelector(state => state.quizzes)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchQuizzes())
    }, [dispatch])

    return (
        <>
        </>
    )
}

export default Quizzes