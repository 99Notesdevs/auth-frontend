import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './components/ui/themeprovider';
import LogIn from './pages/login';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LogIn />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
