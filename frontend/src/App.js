import Home from './components/pages/Home';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import ArticleList from './components/articles/ArticleList';
import ArticleInfo from './components/articles/ArticleInfo';
import ArticleAdd from './components/articles/ArticleAdd';
import ArticleEdit from './components/articles/ArticleEdit';
import './App.css';

const client =new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <BrowserRouter>
      <Navigation/>
        <div className="container">
          <Main/>
        </div>
        </BrowserRouter>
        </ApolloProvider>
    </div>
  );
}

function Navigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink exact className="nav-link" to="/articles">Articles</NavLink></li>
            <li className="nav-item"><NavLink exact className="nav-link" to="/articles/new">Add Article</NavLink></li>
          </ul>
        </div>
      </nav>
    );
}

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={ArticleList}/>
      <Route exact path="/articles/new" component={ArticleAdd} />
      <Route exact path="/articles/:_id" component={ArticleInfo} />
      <Route exact path="/articles/:_id/edit" component={ArticleEdit} />
    </Switch>
  );
}

export default App;
