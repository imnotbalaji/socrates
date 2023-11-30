import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchAnalytics } from "../../store/analytics";


const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const analytics = useSelector(state => state.analytics);

    useEffect(() => {
        dispatch(fetchAnalytics(user._id))
    }, [user._id, dispatch])  

    return (
        <div>
            <div className="beginnerQuestions">
                <h3>Beginner Questions</h3>
                <div className="beginnerData">
                    <h6>Available Questions: {analytics.availBeginnerQuestions}</h6>
                    <h6>Unanswered Questions: {analytics.unansweredBeginnerQuestions}</h6>
                    <h6>Correct Responses: {analytics.correctBeginnerQuestions}</h6>
                    <h6>Incorrect Responses: {analytics.incorrectBeginnerQuestions}</h6>
                </div>
                <div className="beginnerChart">

                </div>
            </div>
            <div className="intermediateQuestions">
                <div className="intermediateData">

                </div>
                <div className="intermediateChart">

                </div>
            </div>
            <div className="advancedQuestions">
                <div className="advancedData">

                </div>
                <div className="advancedChart">

                </div>
            </div>
        </div>
    )
}

export default Profile


