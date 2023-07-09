import { BrowserRouter, Route, Routes } from "react-router-dom";

import Site from "./site/site";
import Dashboard from "./pages/dashboard/dashboard";
import Produtos from "./pages/produtos/produtos";
import Profile from "./pages/profile/profile";

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Site />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/produtos"  element={<Produtos />} />
                <Route path="/profile"   element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;