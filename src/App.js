import React from 'react';
//Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Components
import Header from './components/Header'
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
//styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
)

export default App;