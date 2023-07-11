import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { Auth, DataStore } from 'aws-amplify';
import { Delivery } from "../../models";
import './novo.css';

function Novo() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  async function signUp() {
    const username = email;
    setMessage("");
    if (password !== confirm_password) {
      setMessage('As senhas não conferem! Digite-as novamente.');
      return;
    }

    try {
      const { user } = await Auth.signUp({
        "username": username,
        "password": password,
        attributes: {
          "email": email,
        },
      });
      console.log(user);
      await DataStore.save(
        new Delivery({
          "Nome": nome,
          "TokenADM": user.id
        })
      );
      setResult('S');
    } catch (error) {
      setResult('N');
      if (error.message === 'Password should be at least 6 characters') {
        setMessage('A senha deverá conter pelo menos 6 caracteres'); 
      } else 
      if (error.message === 'The email address is badly formatted.') {
        setMessage('O formato do E-mail está incorreto') 
      } else
      if (error.message === 'The email address is already in use by another account.') {
        setMessage('E-mail já em uso por outra conta');
      } else {
        setMessage('Erro ao criar conta: ' + error.message);
      }
    }
  }
  var ano = new Date().getFullYear();

  return (
    <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
      <a href="/#">
          <img className="mb-4" src="/imagens/logo.png" alt="" />
        </a>

        <div className="form-floating mt-2">
          <input onChange={e => setNome(e.target.value)} type="text" className="form-control" id="nome" value={nome} placeholder="Nome do Delivery" />
          <label htmlFor="nome">Nome</label>
        </div>

        <div className="form-floating mt-2">
          <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" value={email} placeholder="E-mail" />
          <label htmlFor="email">E-mail</label>
        </div>

        <div className="form-floating mt-2">
          <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password" />
          <label htmlFor="password">Defina sua Senha</label>
        </div>

        <div className="form-floating">
          <input onChange={e => setConfirmPassword(e.target.value)} type="password" className="form-control" id="confirm_password" />
          <label htmlFor="confirm_password">Confirme sua Senha</label>
        </div> 

        <div className="form-links">
          <Link to="/app" className="mx-3">Já tenho uma conta</Link>
        </div>

        <button onClick={e => signUp()} className="w-100 btn btn-lg btn-dark mt-2" type="button">REGISTRAR</button>
        {message.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{message}</div> : null}
        {result === 'S' ? redirect("/app/menu/pedidos") : null}
        <p>&copy; 1999-{ano} PSI-SOFTWARE</p>
      </form>
    </div>
  );
}

export default Novo;
