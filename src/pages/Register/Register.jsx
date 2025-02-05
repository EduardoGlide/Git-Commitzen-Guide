import Input from "../../components/input";
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
                        <Input
                            label={"Email"}
                            type={"text"}
                            id={"email"}
                            placeholder={"Digite seu email:"}
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className="form-control">
                        <Input
                            label={"Senha"}
                            type={"password"}
                            id={"password"}
                            placeholder={"Digite sua senha:"}
                            onChange={onPasswordChange}
                        />
                    </div>
                    <button type="submit">Cadastro</button>
                </form>
            </div>
        </>
    );
};

export default Register;
