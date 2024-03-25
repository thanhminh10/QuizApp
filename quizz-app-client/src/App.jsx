import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Logup from './pages/LogupPage/Logup';
import Home from './pages/HomePage/Home';

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
        <Routes>
          {/* Set the default page as the homepage */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logup" element={<Logup />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;