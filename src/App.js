import React, {useEffect} from 'react';
import './App.css';
import HomeScrean from './screens/HomeScrean';
import LoginScreen from './screens/LoginScreen';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import {auth} from "./firebase"
import { useDispatch,useSelector } from 'react-redux';
import {login,logout,selectUser} from "./features/counter/userSlice"
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in
       
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email,
        }))
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
    

  }, [dispatch]);

  return (
    <div className="app">
      
      <Router>
        {!user ? (
          <LoginScreen/>
        ):(
          <Switch>
            <Route path="/profile">
              <ProfileScreen/>
          </Route>
          <Route  exact path="/">
          <HomeScrean />
          </Route>
        </Switch>
        )}
       
    </Router>
      
    </div>
  );
}

export default App;
