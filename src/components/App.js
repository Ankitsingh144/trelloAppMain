import "../styles/App.css";
import {useDispatch,useSelector} from "react-redux";
import {loginSuccess} from "../action";
import React, { Component,useState } from "react";
import Board from "./Board";

const App=()=> {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    console.log('selector',{selector},typeof selector)


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userLogin,setUserlogin] = useState()
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        setUserlogin(true)
        console.log({userLogin})
        let loginVar=   localStorage.setItem('userLogin',true)
        dispatch(loginSuccess(loginVar))
        event.preventDefault();
    }
    const handleLogout = ()=>{
        setUserlogin('false')
        localStorage.removeItem('userLogin')
        dispatch(loginSuccess('false'))

    }
    return (
      <div className="App">
        <div className="Header">React Trello</div>

          <div className="Login">
              <input
                  placeholder="email"
                  type="email"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
                  required
              />

              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <div block size="lg" type="submit" onClick={handleSubmit} >
                  Login
              </div>

          </div>

          {userLogin &&

          <div block size="lg" type="submit" onClick={handleLogout}>
              Logout
          </div>
          }
          {userLogin === true &&
          <Board />

          }

      </div>
    );
}

export default App;
