import './App.css';
import { Routes, Route, Outlet, } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PageNotFound from './Components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
