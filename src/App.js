import { ArticlesList } from './components/ArticlesList/ArticlesList';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/Header';
import { Articles } from './pages/Articles/Articles';
import { ArticlesPage } from './pages/ArticlesPage/ArticlesPage';
import { Auth } from './pages/Auth/Auth';
import { AuthorProfilePage } from './pages/AuthorProfilePage/AuthorProfilePage';
import { Authors } from './pages/Authors/Authors';
import { CreateArticlePage } from './pages/CreateArticlePage/CreateArticlePage';
import { Home } from './pages/Home/Home';
import { UserProfile } from './pages/UserProfile/UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Articles />
      <ArticlesPage />
      <Auth />
      <AuthorProfilePage />
      <Authors />
      <CreateArticlePage />
      <UserProfile />
      <ArticlesList />
    </div>
  );
}

export default App;
