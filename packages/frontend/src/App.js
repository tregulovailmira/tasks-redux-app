import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Tasks from './pages/Tasks';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" />
        <Route path="/tasks" component={Tasks} />
      </Switch>
    </Router>
  );
}

export default App;
