import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchAnalytics } from "../../store/analytics";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./Profile.css";


const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const analytics = useSelector(state => state.analytics);

    useEffect(() => {
        dispatch(fetchAnalytics(user._id))
    }, [user._id, dispatch])  

    const COLORS = ['#eb4f34', '#34eb8f', '#3440eb'];

    // const CustomTooltip = ({ active, payload, label }) => {
    //     if (active) {
    //         return (
    //             <div
    //                 className="custom-tooltip"
    //                 style={{
    //                     backgroundColor: "#ffff",
    //                     padding: "5px",
    //                     border: "1px solid #cccc"
    //                 }}
    //             >
    //                 <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
    //             </div>
    //         );
    //     }
    // }

    const beginnerData = [
        { name: 'Unanswered', questions: analytics.unansweredBeginnerQuestions },
        { name: 'Correct', questions: analytics.correctBeginnerQuestions },
        { name: 'Incorrect', questions: analytics.incorrectBeginnerQuestions }
    ]

    const interData = [
        { name: 'Unanswered', questions: analytics.unansweredInterQuestions },
        { name: 'Correct', questions: analytics.correctInterQuestions },
        { name: 'Incorrect', questions: analytics.incorrectInterQuestions }
    ]

    const advancedData = [
        { name: 'Unanswered', questions: analytics.unansweredAdvancedQuestions },
        { name: 'Correct', questions: analytics.correctAdvancedQuestions },
        { name: 'Incorrect', questions: analytics.incorrectAdvancedQuestions }
    ]

    const totalAvailable = analytics.availBeginnerQuestions + analytics.availInterQuestions + analytics.availAdvancedQuestions;
    const totalUnanswered = analytics.unansweredBeginnerQuestions + analytics.unansweredInterQuestions + analytics.unansweredAdvancedQuestions;
    const totalCorrect = analytics.correctBeginnerQuestions + analytics.correctInterQuestions + analytics.correctAdvancedQuestions;
    const totalIncorrect = analytics.incorrectBeginnerQuestions + analytics.incorrectInterQuestions + analytics.incorrectAdvancedQuestions;

    const totalData = [
        { name: 'Unanswered', questions: totalUnanswered },
        { name: 'Correct', questions: totalCorrect },
        { name: 'Incorrect', questions: totalIncorrect }
    ]

    return (
        <div className="analyticsContainer">
            <div className="analyticsContainerTop">
                <div className="difficulty">
                    <div className="header">
                        <h3>Beginner Questions</h3>
                    </div>
                    <div className="dataContainer">
                        <div className="data">
                            <h4>Available Questions: {analytics.availBeginnerQuestions}</h4>
                            <h4>Unanswered Questions: {analytics.unansweredBeginnerQuestions}</h4>
                            <h4>Correct Responses: {analytics.correctBeginnerQuestions}</h4>
                            <h4>Incorrect Responses: {analytics.incorrectBeginnerQuestions}</h4>
                        </div>
                        <PieChart width={300} height={300}>
                            <Pie
                                data={beginnerData}
                                dataKey="questions"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {beginnerData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
                <div className="difficulty">
                    <div className="header">
                        <h3>Intermediate Questions</h3>
                    </div>
                    <div className="dataContainer">
                        <div className="data">
                            <h4>Available Questions: {analytics.availInterQuestions}</h4>
                            <h4>Unanswered Questions: {analytics.unansweredInterQuestions}</h4>
                            <h4>Correct Responses: {analytics.correctInterQuestions}</h4>
                            <h4>Incorrect Responses: {analytics.incorrectInterQuestions}</h4>
                        </div>
                        <PieChart width={300} height={300}>
                            <Pie
                                data={interData}
                                dataKey="questions"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {interData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
            </div>
            <div className="analyticsContainerBottom">
                <div className="difficulty">
                    <div className="header">
                        <h3>Advanced Questions</h3>
                    </div>
                    <div className="dataContainer">
                        <div className="data">
                            <h4>Available Questions: {analytics.availAdvancedQuestions}</h4>
                            <h4>Unanswered Questions: {analytics.unansweredAdvancedQuestions}</h4>
                            <h4>Correct Responses: {analytics.correctAdvancedQuestions}</h4>
                            <h4>Incorrect Responses: {analytics.incorrectAdvancedQuestions}</h4>
                        </div>
                        <PieChart width={300} height={300}>
                            <Pie
                                data={advancedData}
                                dataKey="questions"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {advancedData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
                <div className="difficulty">
                    <div className="header">
                        <h3>Combined Questions</h3>
                    </div>
                    <div className="dataContainer">
                        <div className="data">
                            <h4>Available Questions: {totalAvailable}</h4>
                            <h4>Unanswered Questions: {totalUnanswered}</h4>
                            <h4>Correct Responses: {totalCorrect}</h4>
                            <h4>Incorrect Responses: {totalIncorrect}</h4>
                        </div>
                        <PieChart width={300} height={300}>
                            <Pie
                                data={totalData}
                                dataKey="questions"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {totalData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>    
    )
};

export default Profile


