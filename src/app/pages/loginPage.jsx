import React, { useState } from "react";
import LoginForm from "../components/forms/loginForm";
import RegisterForm from "../components/forms/registerForm";

const LoginPage = () => {
    const [type, setType] = useState("login");
    const handleChangeType = () => {
        setType(prevState => prevState === "login" ? "register" : "login");
    };
    return (
        <div className="login-page-container">
            <div className="row">
                <div className="col-12">
                    {type === "login"
                        ? (<>
                            <LoginForm/>
                            <p className="text-secondary text-center mt-3">Еще нет аккаунта?{" "}
                                <a className="text-secondary" role="button" onClick={handleChangeType}>Зарегистрироваться</a>
                            </p>
                        </>)
                        : (<>
                            <RegisterForm/>
                            <p className="text-secondary text-center mt-3">Уже есть аккаунт?{" "}
                                <a className="text-secondary" role="button" onClick={handleChangeType}>Войти</a>
                            </p>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
