import './styles/App.css';
import Blogs from './components/Blogs.jsx';
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNav.jsx';
import NotFound from './components/NotFound.jsx';
import NewBlog from './components/NewBlog.jsx';

function App() {
  return (
    <div>
      <MainNavigation />
      <div class="container">
        <div class="row">
          <h2>&nbsp;</h2>
        </div>
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;