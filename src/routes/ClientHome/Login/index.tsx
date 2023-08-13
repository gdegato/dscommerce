/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './styles.css'
import { useState } from 'react';
import { loginRequest } from '../../../services/auth-service';
import { CredentialsDTO } from '../../../models/auth';

export default function Login() {

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: '',
        password: ''
    });

    function handleSubmit(event: any) {
        event.preventDefault();
        loginRequest(formData)
    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form
                        className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input
                                    name='username'
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="dsc-form-control"
                                    type="text" placeholder="Email" />
                                <div
                                    className="dsc-form-error"></div>
                            </div>
                            <div>
                                <input
                                    name='password'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="dsc-form-control" type="password"
                                    placeholder="Senha" />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button
                                type="submit"
                                className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
