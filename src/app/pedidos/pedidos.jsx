import { useContext } from "react";
import Menu from "../../components/menu";
import { AuthContext } from "../../context/auth";
import { Auth } from "aws-amplify";
import './pedidos.css';

function Pedidos() {
  const { delivery } = useContext(AuthContext);

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">

        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <Menu page="pedidos" />
        </div>
        <div className="col py-3 me-3">
          <div className="d-flex justify-content-between">
            <h1>GESTÃO DE PEDIDOS (DASHBOARD)</h1>
            <p>Delivery: {delivery}</p>
            <button onClick={signOut}>SAIR (LogOut)</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pedidos;