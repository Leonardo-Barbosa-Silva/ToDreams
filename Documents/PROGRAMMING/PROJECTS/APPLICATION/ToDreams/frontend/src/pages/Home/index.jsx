import { useDispatch, useSelector } from 'react-redux'
import {
    Box,
    Typography,
    useTheme
} from '@mui/material'
import { LogoutOutlined, DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'
import { changeMode, reset as resetAuth } from '../../features/auth/authSlice'



export default function Dashboard() {
    const dispatch = useDispatch()

    const { mode } = useSelector( (state) => state.auth )

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
                <Typography variant='h1' fontWeight="bold">
                    ToDreams
                </Typography>

                {mode === "light" ? (
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        onClick={ () => dispatch(changeMode()) }
                        display="flex"
                        alignItems="center"
                        gap="15px"
                        sx={{
                            "&:hover": {
                                cursor: "pointer",
                                opacity: "20%"
                            }
                        }}
                    >
                        <LightModeOutlined /> Mode
                    </Typography>
                ) : (
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        onClick={ () => dispatch(changeMode()) }
                        display="flex"
                        alignItems="center"
                        gap="15px"
                        sx={{
                            "&:hover": {
                                cursor: "pointer",
                                opacity: "20%"
                            }
                        }}
                    >
                        <DarkModeOutlined /> Mode
                    </Typography>
                )}

                    <Typography 
                        variant="h4"
                        fontWeight="bold"
                        onClick={ () => dispatch(resetAuth()) }
                        display="flex"
                        alignItems="center"
                        gap="15px"
                        sx={{
                            "&:hover": {
                                cursor: "pointer",
                                opacity: "20%"
                            }
                        }}
                    >
                        <LogoutOutlined /> Log Out
                    </Typography>
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