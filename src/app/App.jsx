import './App.css'
import Home from '../pages/Home/Home'
import LogIn from '../pages/LogIn/LogIn'
import SecandFooter from '../common/SecandFooter/SecandFooter'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import DrawerNav from '../Components/DrawerNav/DrawerNav'
import { useEffect, useState } from 'react'
import AdminAction from '../pages/AdminAction/AdminAction'

function App() {

  const [login, setLogin] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem('stmToken');
    if (key !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <>
      {login ?
          <DrawerNav />
      :
          <Routes>
            <Route path='*' element={<Navigate to={'/home'} />} />
            <Route path={'/home'} element={<Home />} />
            <Route path={'/login'} element={<LogIn />} />
          </Routes>

      }

      {/* <AdminAction/> */}
    </>


  );
}

export default App
