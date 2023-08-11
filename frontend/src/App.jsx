import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchData from './components/FetchData';
import FormData from './components/FormData';
import Gallery from './components/Gallery';
import FormUpload from './components/FormUpload';
import './index.css';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<FormUpload />} />
                    <Route path='form' element={<FormData />} />
                    <Route path='fetch' element={<FetchData />} />
                    <Route path='*' element={<Gallery />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
