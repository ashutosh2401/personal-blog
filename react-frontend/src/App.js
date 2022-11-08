import Navbar from "./Navbar/Navbar";
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from "./Pages/Create";
import BlogDetails from "./Pages/BlogDetails";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
