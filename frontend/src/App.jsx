import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchData from './components/FetchData';
import FormData from './components/FormData';
import Fallback from './components/Fallback';
import FormUpload from './components/FormUpload';
import Banking from './pages/Banking';
import { ThemeProvider } from './components/ThemeContext';
import './index.css';
import './App.css';

const App = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Banking />} />
                        <Route path='upload' element={<FormUpload />} />
                        <Route path='form' element={<FormData />} />
                        <Route path='fetch' element={<FetchData />} />
                        <Route path='*' element={<Fallback />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
