import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme/index.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";


export default function App() {

  const mode = useSelector( state => state.auth.mode )
  const theme = useMemo( () => createTheme(themeSettings(mode)), [mode] )

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Auth />}/>
        </Routes>
      </ThemeProvider>
    </Router>
  )
}
