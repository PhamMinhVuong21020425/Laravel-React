import './index.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchData from './components/FetchData';
import FormData from './components/FormData';
import Gallery from './components/Gallery';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<FetchData />} />
                    <Route path='form' element={<FormData />} />
                    <Route path='*' element={<Gallery />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
