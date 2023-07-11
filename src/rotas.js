import { useContext } from "react";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
// import { AuthContext } from "./context/auth";

import Site from "./site/site";
import Login from "./app/login/login";
import NewAccount from './app/login/novo.jsx';
import Pedidos from "./app/pedidos/pedidos";
import Produtos from "./app/produtos/produtos";
import Delivery from "./app/delivery/delivery";
import Config from "./app/config/config";

function Rotas(){
    // const {logged} = useContext(AuthContext); // acrescentar nivel de acesso no contexto
    // console.log("Is logged?: ", logged);

    // const SecureRoute = ({...params}) => {
    //     if (!logged) {
    //         return redirect("/");
    //     } else {
    //         return <Route {...params} />
    //     }
    // }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Site />} />
                <Route path='/app/login' component={<Login />} />
                <Route path='/app/login/novo' component={<NewAccount />} />
                {/*-----------------------*/}
                <Route path="/app/pedidos" element={<Pedidos />} />
                <Route path="/app/produtos" element={<Produtos />} />
                <Route path="/app/delivery" element={<Delivery />} />
                <Route path="/app/config" element={<Config />} />
                {/*-----------------------*/}
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
