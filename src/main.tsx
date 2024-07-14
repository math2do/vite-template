import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/styles/global.css';
import { store } from '@/state/store.tsx';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from '@/navbar.tsx';
import 'unfonts.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/redux/:param" element={<App />} />
              <Route path="/home" element={<h1>Home</h1>} />
              <Route path="/about" element={<h1>About</h1>} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
