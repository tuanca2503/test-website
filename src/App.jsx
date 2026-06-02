import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

    const [page, setPage] = useState("login");

    return (
        <div>

            <button
                onClick={() => setPage("login")}
            >
                Login
            </button>

            <button
                onClick={() => setPage("register")}
            >
                Register
            </button>

            <hr />

            {
                page === "login"
                    ? <Login />
                    : <Register />
            }

        </div>
    );
}

export default App;