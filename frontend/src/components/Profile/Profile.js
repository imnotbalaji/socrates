import { useSelector } from "react-redux"


const Profile = () => {
    const user = useSelector(state => state.session.user)

    
    return (
        <>
            <div>
                Test
            </div>
        </>
    )
}

export default Profile


