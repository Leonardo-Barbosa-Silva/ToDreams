import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getGoals, reset, resetAlert } from '../../features/goals/goalSlice'
import GoalForm from '../../components/GoalForm'
import GoalItem from '../../components/GoalItem'
import Spinner from '../../components/Spinner'
import Alert from '../../components/Alert'
import NavBar from '../../components/NavBar'



export default function Dashboard() {

    // Assign react-router-dom navigate method in a variable
    const navigate = useNavigate()

    // Assign react-redux method in a variable
    const dispatch = useDispatch()

    // Desctructuring properties of state's redux
    const { user } = useSelector( (state) => state.auth )
    const { goals, isError, isSuccess, isLoading, message } = useSelector( (state) => state.goal )

    

    useEffect( () => {
        if (!user) {
            navigate('/')
        } else {
            if (isError || isSuccess) {
                setTimeout( () => {
                    dispatch(resetAlert())
                }, 5500)
            }

            dispatch(getGoals())
        }

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, dispatch])
    
    
    return (
        <div className="dashboard-container">
            {isLoading ? (
                <Spinner />
            ) : (
                    <>
                        <NavBar />
                        {isError && <Alert message={message} alertType="error" show />}
                        {isSuccess && message !== 'Successfully get user goals' ? (
                            <Alert message={message} alertType="success" show />
                        ) : (
                            <></>
                        )}
                        <section className="dashboard-goal-form-container">
                            <GoalForm />
                        </section>
                        <section className="dashboard-content">
                            {goals.length > 0 ? (
                                <div className="goals">
                                    {goals.map( (goal) => (
                                        <GoalItem key={goal._id} goal={goal} />
                                    ))}
                                </div>
                            ) : (
                                <h3>You have not set any goals</h3>
                            )}
                        </section>
                    </>
                )
            }
        </div>
    )
}