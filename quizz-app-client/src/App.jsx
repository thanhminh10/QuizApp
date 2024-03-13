
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Logup from './pages/Logup/Logup';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Logup/>
      </main>
  </ThemeProvider>
  )
}

export default App
