import ListPostPage from './components/ListPostPage'
import CreatePostPage from './components/CreatePostPage'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to='/ListPostPage'>ListPostPage</Link>
          </li>
          <br/>
          <li>
            <Link to='/CreatePostPage'>CreatePostPage</Link>
          </li>
        </ul>
      </nav>
    </div>
      <Switch>
        <Route path='/ListPostPage' exact component={ListPostPage}/>
        <Route path='/CreatePostPage' component={CreatePostPage}/>
      </Switch>
    </Router>
  );
}

export default App;
