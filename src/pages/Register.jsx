import { useState } from "react";
import { register } from "../api/authApi";

export default function Register() {

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            // ===== API REGISTER =====
            const res = await register(form);

            console.log(res.data);

            alert("Đăng ký thành công");

        } catch {

            alert("Đăng ký thất bại");

        }
    };

    return (
        <div>

            <h2>Đăng ký</h2>

            <form onSubmit={handleRegister}>

                <input
                    placeholder="Họ tên"
                    value={form.fullName}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            fullName: e.target.value
                        })
                    }
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={form.password}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value
                        })
                    }
                />

                <br /><br />

                <button type="submit">
                    Đăng ký
                </button>

            </form>

        </div>
    );
}