import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [role, setRole] = useState('Farmer');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement login logic here
        history.push(role === 'Farmer' ? '/farmer-dashboard' : '/buyer-dashboard');
    };

    return (
        <div className="login-container">
            <h2>Login to FarmX</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="Farmer"
                            checked={role === 'Farmer'}
                            onChange={() => setRole('Farmer')}
                        />
                        Farmer
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Buyer"
                            checked={role === 'Buyer'}
                            onChange={() => setRole('Buyer')}
                        />
                        Buyer
                    </label>
                </div>
                <div>
                    <label>Username/Email:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>New user? <a href="/signup">Sign up here</a></p>
        </div>
    );
};

export default Login;
