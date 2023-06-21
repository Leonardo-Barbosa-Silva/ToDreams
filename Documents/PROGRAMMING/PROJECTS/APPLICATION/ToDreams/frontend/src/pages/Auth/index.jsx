import { Box, Typography, useTheme, Link } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';

function Auth() {

    const { palette } = useTheme()

    return (
        <Box sx={{
            width: "100%",
            height: "120px",
            padding: "20px",
            backgroundColor: palette.background.alt,
            display: "flex",
            alignItems: "center",
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
        </Box>
    )
}



export default Auth;