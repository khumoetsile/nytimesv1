import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import { NewsProvider } from './components/NewsContext';

function App() {
  return (
    <NewsProvider>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={NewsList} />
            <Route path="/:id" component={NewsDetail} />
          </Switch>
        </Router>
      </div>
    </NewsProvider>
  );
}

export default App;
