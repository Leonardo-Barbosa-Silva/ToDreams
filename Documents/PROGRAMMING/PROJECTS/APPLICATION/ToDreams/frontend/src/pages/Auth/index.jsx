import { useSelector } from 'react-redux'
import { useState } from 'react';
import { Box, Typography, useTheme, Link } from '@mui/material';
import { EditOutlinedIcon } from '@mui/icons-material';
import Form from '../../components/AuthForm';



function Auth() {
    const { palette } = useTheme()

    return (
        <Box width="100%" height="100vh">
            <Box component="header" sx={{
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

            <Form />

            <Box>

            </Box>
        </Box>
    )
}



export default Auth;