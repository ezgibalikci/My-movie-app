import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Layout from './components/Layout';

const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Layout />} />
                <Route path="movie/:imdbId" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
