import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CountryDetail from "./components/countryDetail";
import Header from "./components/nav";
import Home from "./ui/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:name" component={CountryDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
