import './App.css';
import { Routes,  Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BookPage from './pages/BookPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book" element={<BookPage />} />
      </Route>
    </Routes>
  );
}

export default App;
