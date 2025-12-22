import { ArticlesList } from './components/ArticlesList/ArticlesList';
import { ArticlesPage } from './pages/ArticlesPage/ArticlesPage';
import  Auth  from './pages/Auth/Auth';
import { AuthorProfilePage } from './pages/AuthorProfilePage/AuthorProfilePage';
import { Authors } from './pages/Authors/Authors';
import { CreateArticlePage } from './pages/CreateArticlePage/CreateArticlePage';
import { Home } from './pages/Home/Home';
import { UserProfile } from './pages/UserProfile/UserProfile';
import './App.css';
import { Component } from 'react';
import axios from 'axios'


  

export default class App extends Component {
  state = {
    users: [
      { _id: "6881563901add19ee16fcff2", name: "Анастасія Олійник", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcff2.webp", articlesAmount: 2, email: "anastasia.oliinyk@example.com", password: "ana123", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcff3", name: "Назар Ткаченко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcff3.webp", articlesAmount: 9, email: "nazar.tkachenko@example.com", password: "naz789", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcff4", name: "Єва Бондаренко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcff4.webp", articlesAmount: 6, email: "yeva.bondarenko@example.com", password: "eva456", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcff5", name: "Дмитро Романенко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcff5.webp", articlesAmount: 14, email: "dmytro.romanenko@example.com", password: "dim789", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcff6", name: "Олександра Бондаренко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcff6.webp", articlesAmount: 10, email: "oleksandra.bondarenko@example.com", password: "ole555", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcff7", name: "Олександр Шевчук", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcff7.webp", articlesAmount: 11, email: "oleksandr.shevchuk@example.com", password: "sha321", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcff8", name: "Софія Мельник", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcff8.webp", articlesAmount: 5, email: "sofiia.melnyk@example.com", password: "sof654", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcff9", name: "Владислав Поліщук", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcff9.webp", articlesAmount: 6, email: "vladyslav.polishchuk@example.com", password: "vla852", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcffa", name: "Іван Ковальчук", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcffa.webp", articlesAmount: 8, email: "ivan.kovalchuk@example.com", password: "iva963", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcffb", name: "Дарина Ковальчук", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcffb.webp", articlesAmount: 13, email: "daryna.kovalchuk@example.com", password: "dar741", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcffc", name: "Поліна Романенко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcffc.webp", articlesAmount: 9, email: "polina.romanenko@example.com", password: "pol357", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcffd", name: "Софія Ковальчук", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcffd.webp", articlesAmount: 2, email: "sofiia.kovalchuk@example.com", password: "sof852", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcffe", name: "Владислав Гриценко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcffe.webp", articlesAmount: 13, email: "vladyslav.hrytsenko@example.com", password: "vla753", login: false, favorites: [] },
      { _id: "6881563901add19ee16fcfff", name: "Дарина Шевченко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fcfff.webp", articlesAmount: 13, email: "daryna.shevchenko@example.com", password: "dar951", login: false, favorites: [] },
      { _id: "6881563901add19ee16fd000", name: "Катерина Лисенко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fd000.webp", articlesAmount: 3, email: "kateryna.lysenko@example.com", password: "kat258", login: false, favorites: [] },
      { _id: "6881563901add19ee16fd001", name: "Максим Гриценко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fd001.webp", articlesAmount: 8, email: "maksym.hrytsenko@example.com", password: "mak456", login: false, favorites: [] },
      { _id: "6881563901add19ee16fd002", name: "Олександра Ткаченко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fd002.webp", articlesAmount: 12, email: "oleksandra.tkachenko@example.com", password: "ole963", login: false, favorites: [] },
      { _id: "6881563901add19ee16fd003", name: "Дарина Лисенко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fd003.webp", articlesAmount: 10, email: "daryna.lysenko@example.com", password: "dar357", login: false, favorites: [] },
      { _id: "6881563901add19ee16fd004", name: "Єва Шевченко", avatarUrl: "https://ftp.goit.study/img/harmoniq/users/6881563901add19ee16fd004.webp", articlesAmount: 8, email: "yeva.shevchenko@example.com", password: "eva147", login: false, favorites: [] }
      ],
    articles: []
    };

    fetchArticles = () => {
      axios.get('https://69481e8d1ee66d04a44ebf1c.mockapi.io/articles/articles')
       .then(response => {
            this.setState({ articles: response.data }); 
            console.log(response.data)
        })
        .catch(error => {
            console.error("API ERROR:", error.response);
        })
    }

userCreator = (data) => {
  console.log(this.state.users);

  this.setState(prevState => ({
    users: [
      ...prevState.users,
      {
        _id: (prevState.users.length + 1).toString().padStart(12, '0'),
        name: data[0],
        avatarUrl:
          "https://ftp.goit.study/img/harmoniq/users/default-user.webp",
        articlesAmount: 0,
        email: data[1],
        password: data[2],
        login: data[3],
        favorites: []
      }
    ]
  }));
};


    render () {
      console.log(`This is articles in state ${this.state.articles}`)
      return <div className="App">
        <Home users={this.state.users}/>
        <ArticlesPage />
        <Auth currentUsers={this.state.users} onSendData={this.userCreator}/>
        <AuthorProfilePage articles={this.state.articles}/>
        <Authors users={this.state.users}/>
        <CreateArticlePage />
        <UserProfile/>
        <ArticlesList articles={this.state.articles}/>
      </div>
    }

    componentDidMount() {
      this.fetchArticles()
    }
}


