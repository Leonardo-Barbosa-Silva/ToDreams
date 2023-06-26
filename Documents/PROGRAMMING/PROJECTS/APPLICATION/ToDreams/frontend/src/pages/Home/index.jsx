import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getGoals, reset, resetAlert } from '../../features/goals/goalSlice'
import {
    Box,
    Typography,
    useTheme,
    Button,
    TextField
} from '@mui/material'
import { LogoutOutlined } from '@mui/icons-material'
/*import GoalForm from '../../components/GoalForm'
import GoalItem from '../../components/GoalItem'
import Spinner from '../../components/Spinner'
import Alert from '../../components/Alert'
import NavBar from '../../components/NavBar'*/



export default function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector( (state) => state.auth )
    const { goals, isError, isSuccess, isLoading, message } = useSelector( (state) => state.goal )

    const { palette } = useTheme()
    
    
    return (

        <Box width="250px" height="100vh">
            <Box component="header" sx={{
                width: "100%",
                height: "100%",
                padding: "20px",
                backgroundColor: palette.background.alt,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <Typography variant='h1' fontWeight="bold" sx={{
                    "&:hover": {
                        cursor: "pointer",
                        opacity: "20%"
                    }
                }}>
                    ToDreams
                </Typography>

                <Box
                    display="flex"
                    alignItems="center"
                    onClick={ () => {
                        localStorage.removeItem('')
                    }}
                    sx={{
                        "&:hover": {
                            cursor: "pointer",
                            opacity: "20%"
                        }
                    }}
                >
                    <LogoutOutlined />

                    <Typography variant='h4' fontWeight="bold">
                        Log Out
                    </Typography>
                </Box>
            </Box>
            
            
        </Box>

        /*
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
        */
    )
}