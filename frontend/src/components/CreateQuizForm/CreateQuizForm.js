import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const CreateQuizForm = () => {
    const user = useSelector(state => state.session.user)
    return
        (
            <div>
                <form>

                </form>
            </div>
        )
    
}

export default CreateQuizForm