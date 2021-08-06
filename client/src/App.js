import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Blog from "./pages/Blog.js";
import Catagories from "./pages/Catagories.js";
import Article from "./pages/Article.js"
function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Blog} />
      <Route exact path="/Catagories/:Category" component={Catagories} />
      <Route exact path="/Article/:Article" component={Article} />
      </Switch>
    </div>
  </Router>
  );
}
export default App;