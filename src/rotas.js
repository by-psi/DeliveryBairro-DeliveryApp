import { BrowserRouter, Route, Routes } from "react-router-dom";

import Site from "./site/site";
import Dashboard from "./pages/dashboard/dashboard";
import Clientes from "./pages/clientes/clientes";
import Produtos from "./pages/produtos/produtos";

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Site />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/clientes"  element={<Clientes />} />
                <Route path="/produtos"  element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;