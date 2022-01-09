import React, { useEffect } from 'react';
import Homescreen from './Screens/Homescreen';
import Loginscreen from './Screens/Loginscreen';
import './App.css';
import ProfileScreen from './Screens/ProfileScreen'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {

        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,

        }))

      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      {!user ? (
        <Loginscreen />
      ) :
        <Routes>
          <Route exact path="/" element={<Homescreen />} />
          <Route  path="/profile" element={<ProfileScreen />} />
        </Routes>
      }
    </BrowserRouter>
  );
}
export default App;
