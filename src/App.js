import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'



function App() {
  const { authIsReady, user } = useAuthContext()


  return (
    <div className="App">


      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route path="/"
              element={user ? <Home /> : <Navigate to='/login' />}
            />
            <Route path="/login"
              element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path="/signup"
              element={!user ? <Signup /> : <Navigate to='/' />} />
            <Route path="*" element={<Navigate to='/' replace />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App