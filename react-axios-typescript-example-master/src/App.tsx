import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import AddTutorial2 from "./components/add-tutorial2.component";
import Tutorial2 from "./components/tutorial2.component";
import TutorialsList2 from "./components/tutorials2-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tutorials2"} className="nav-link">
                Tutorials2
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add2"} className="nav-link">
                Add2
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />

            <Route exact path={["/tutorials2"]} component={TutorialsList2} />
            <Route exact path="/add2" component={AddTutorial2} />
            <Route path="/tutorials2/:id" component={Tutorial2} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
