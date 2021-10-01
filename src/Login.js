import React, { useState, useContext } from "react";
import LoginForm from "./LoginForm";
import UserContext, {userProvider} from "./UserContext/UserContext";
import Topbar from './Folder_SideBar_TopBar/Topbar';
import Layout from "./Folder_Contenido_General/Layout";

function Login() {
  const toggleIsLogged = (booleano) =>{
    setIsLogged(booleano)
    console.log(booleano)
  }
  // usuario de prueba
  const adminUser = {
    username: "admin",
    password: "admin123",
  };
  
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  

  const login_function = (user_data) => {
    console.log(user_data);
    if (user_data.username == adminUser.username && user_data.password == adminUser.password){
      console.log("Logged in");
      setUser({
        username: user_data.username,
        password: user_data.password
      })
      toggleIsLogged(true)
      
      
    } else {
      console.log("Usuario o contraseña incorrecto");
      setError("Usuario o contraseña incorrecto");
      toggleIsLogged(false)
    }
  };

  const logout = () => {
    setUser({username: "", password: ""})
    setError("")
    
  }
  const [isLogged, setIsLogged] = useState(false)

  

  return (
    <Layout >
    <>
      {user.username !== "" ? (
        <>         
      </>) : <LoginForm login_function={login_function} error={error}/>}
    </>
    </Layout>
  );
}

export default Login;
