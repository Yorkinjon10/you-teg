import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/FrontEnd';
import Products from './pages/BackEnd';
import Reports from './pages/FullStack';
export const App =() => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/reports' component={Reports} />
      </Switch>
    </Router>
    </>
  );
}
// export default App;