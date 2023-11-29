import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createQuiz } from '../../store/quiz';


const CreateQuizForm = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const [difficulty, setDifficulty] = useState('beginner')
    const [topic, setTopic] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const quiz = {difficulty: difficulty, topic: topic, userId: user._id }
        console.log(quiz)
        dispatch(createQuiz(quiz))
    }
    return (
            <div >
                <form onSubmit={handleSubmit}>
                <label for="dropdown">Select a Difficulty:</label>
                    <select id="dropdown" onChange={(e)=>setDifficulty(e.target.value)}name="difficulty">
                        <option value="beginner" >beginner</option>
                        <option value="intermediate" >intermediate</option>
                        <option value="advanced" >advanced</option>
                    </select>
                

                    <label>topic</label>
                        <input type="text" value={topic} onChange={(e)=>setTopic(e.target.value)}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    
}

export default CreateQuizForm