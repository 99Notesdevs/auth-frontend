import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import {AuthProvider} from './contexts/AuthContext';
import { ThemeProvider } from './components/ui/themeprovider';
import LogIn from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
      </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
