import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/main.css';
import App from './App';
import Background from './components/Background';

import { ThemeProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthContextProvider>
                <Background>
                    <App />
                </Background>
            </AuthContextProvider>
        </ThemeProvider>
    </React.StrictMode>,
);