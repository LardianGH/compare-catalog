import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Blog from "./pages/Blog.js";
function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Blog} />
      </Switch>
    </div>
  </Router>
  );
}
export default App;