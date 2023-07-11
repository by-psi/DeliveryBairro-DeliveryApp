import React, { useState, useContext } from 'react';
import { Link, redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { Auth, DataStore } from 'aws-amplify';
import { Delivery } from "../../models";
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const {setLogged, setUser} = useContext(AuthContext);

  async function signIn() {
    const username = email;
    try {
      await Auth.signIn(username, password).then((user) => {
        let uid = user.id;
        console.log("User ID: ", uid);
        DataStore.query(Delivery, uid).then((snapshot) => {
          console.log("Delivery: ", snapshot?.Nome);
          localStorage.setItem("delivery", snapshot?.Nome);
          console.log("Token: ", snapshot?.TokenADM);
          localStorage.setItem("token", snapshot?.TokenADM);
        })
        localStorage.setItem("logged", "S");
        setUser(user);
        setLogged(true);
        setResult('S');
      })
    } catch (error) {
      localStorage.setItem("logged", "N");
      setLogged(false);
      setResult('N');
    }
  }

  function ChangeMail(event) {
    setEmail(event.target.value);
  }

  function ChangePassword(event) {
    setPassword(event.target.value);
  }

  var ano = new Date().getFullYear();

  return (
    <div className="d-flex align-items-center text-center form-container">
      <span>{process.env.REACT_APP_AMBIENTE}</span>
      <form className="form-signin">
        <a href="/#">
          <img className="mb-4" src="/imagens/logo.png" alt="" />
        </a>
        <div className="form-floating">
          <input onChange={ChangeMail} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input onChange={ChangePassword} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
          <label htmlFor="floatingPassword">Senha</label>
        </div>
        <div className="form-links">
          <Link to="#" className="mx-3">Esqueci minha senha!</Link>
          <Link to="/app/login/novo" className="mx-3">Ainda não possui uma conta? Junte-se a nós!</Link> 
        </div>
        <button onClick={signIn} className="btn btn-lg btn-dark mt-2 w-100" type="button">ENTRAR</button>
        {result === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail e/ou senha inválidos!</div> : null}
        {result === 'S' ? redirect("/app/pedidos") : null}
        <p>&copy; 1999-{ano} PSI-SOFTWARE</p>
      </form>
    </div>
  )
}

export default Login;