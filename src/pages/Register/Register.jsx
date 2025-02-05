import Teste from "../../components/Teste";
import "./Register.css";
import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const autorizedUsers = [
        {
            email: "commitzen@glide.com.br",
            password: "123456",
        },
    ];

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);

    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        const user = autorizedUsers.find(
            (user) => user.email == email || user.password == password
        );
        if (user) {
            alert("Usuário autorizado.");
        } else {
            alert("Usuário não autorizado.");
            e.target.reset();
        }
    };

    return (
        <>
            <div className="container">
                <div className="header">
                    Cadastro
                </div>
                <form id="form" className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <Teste
                            
                            type="text"
                            id="email"
                            placeholder="Digite seu email.."
                            onChange={onEmailChange}
                        ></Teste>
                    </div>
                    <div className="form-control">
                        <Teste
                            type="password"
                            id="password"
                            placeholder="Digite sua senha..."
                            onChange={onPasswordChange}></Teste>
                    </div>
                    <button type="submit">Cadastro</button>
                </form>
            </div>
        </>
    );
};

export default Register;
