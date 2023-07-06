import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components';
import { Home, Movies, MovieDetails } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
