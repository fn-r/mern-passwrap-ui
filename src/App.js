import { useContext } from "react";
import axios from "axios";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Notes from "./pages/Notes";
import Webs from "./pages/Webs";
import Devs from "./pages/Devs";
import Login from "./pages/Login";

axios.defaults.withCredentials = true

function App() {
    const { user } = useContext(AuthContext);
    const PrivateRoute = ({ children }) => user ? children : <Navigate to="/login" />
    const PublicRoute = ({ children }) => user ? <Navigate to="/" /> : children

    return (
        <BrowserRouter forceResfresh={true}>
            <Routes>
                {/* Private access */}
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="apps" element={<PrivateRoute><Apps /></PrivateRoute>} />
                <Route path="notes" element={<PrivateRoute><Notes /></PrivateRoute>} />
                <Route path="webs" element={<PrivateRoute><Webs /></PrivateRoute>} />
                <Route path="devs" element={<PrivateRoute><Devs /></PrivateRoute>} />
                {/* Public access */}
                <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;