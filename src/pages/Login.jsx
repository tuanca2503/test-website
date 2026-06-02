import { useState } from "react";
import { login } from "../api/authApi";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            // ===== API LOGIN =====
            const res = await login({
                email,
                password
            });

            console.log(res.data);

            alert("Đăng nhập thành công");

        } catch (err) {

            alert("Đăng nhập thất bại");

        }
    };

    return (
        <div>

            <h2>Đăng nhập</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Đăng nhập
                </button>

            </form>

        </div>
    );
}