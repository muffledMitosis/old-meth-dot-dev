import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from './views/LandingPage';
import ProjectsPage from './views/ProjectsPage';
import BlogPage from './views/BlogPage';
import BlogReader from "./views/BlogReader";


const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/blog/:id" component={BlogReader} />
      </Switch>
    </Router>
  )
}


function App() {
  return (
    <Routing />
  );
}

export default App;
