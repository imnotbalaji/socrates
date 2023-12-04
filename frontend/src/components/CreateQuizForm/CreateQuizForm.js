import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createQuiz } from '../../store/quiz';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { toggle } from '../../store/loading';
import NavBar from '../NavBar/NavBar';
import "./CreateQuiz.scss"


const CreateQuizForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const [difficulty, setDifficulty] = useState('beginner')
    const [topic, setTopic] = useState()
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        const quiz = {difficulty: difficulty, topic: topic, userId: user._id }
        dispatch(toggle())
        dispatch(createQuiz(quiz))
        .then(res => dispatch(toggle()))
        
        history.push('/quizzes')
        // .then( res =>history.push('/quizzes'))
    }

    return (
            <>
            <NavBar/>
            
                <form className = "create-quiz-form" onSubmit={handleSubmit}>
                {/* <label>topic</label> */}
                        <input type="text" placeholder="What's on your mind" value={topic} onChange={(e)=>setTopic(e.target.value)}></input>
                
                    <select id="dropdown" onChange={(e)=>setDifficulty(e.target.value)}name="difficulty">
                        <option value="beginner" >Difficult Level: Beginner</option>
                        <option value="intermediate" >Difficult Level: intermediate</option>
                        <option value="advanced" >Difficult Level: Advanced</option>
                    </select>
                

                   
                    <button type="submit" disabled = {!topic}>Submit</button>
                </form>
            
            </>
        )
    
}

export default CreateQuizForm