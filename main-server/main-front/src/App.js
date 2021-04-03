import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from './views/LandingPage';
import ProjectsPage from './views/ProjectsPage';
import BlogPage from './views/BlogPage';


const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/blog" component={BlogPage} />
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
