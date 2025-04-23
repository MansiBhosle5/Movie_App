import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy-loaded components
const HomePage = React.lazy(() => import('./HomePage'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));
const MoviePageDetail = React.lazy(() => import('./MoviePageDetail'));
const FavoritePage = React.lazy(() => import('./FavoritePage'));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/MoviePageDetail/:name/:description/:genre/:image' element={<MoviePageDetail />} />
        <Route path='/Favorite' element={<FavoritePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
