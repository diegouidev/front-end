import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GloblaStyles from './styles/global';
import { AuthProvider } from './hooks/auth'
import theme from './styles/theme';
import { Routes } from './routes';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GloblaStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
    <ToastContainer limit={3} theme='colored' />
  </React.StrictMode>
)
