import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "./header.js";
import PeoplePage from "./people";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const apiUrl = "https://reqres.in/api/users?per_page=12";
export default function App() {
  const [employee, setemployee] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setemployee(jsonResponse.data);
      });
  }, []);

  return (
    <div className="App">
      {/* <Header/> */}
      <Router>
        <div className="stardb-app">
          <Header onServiceChange={this.onServiceChange} />
          {/* <RandomPlanet /> */}

          <Switch>
            <Route path="/home" render={() => <h2>Главная</h2>} exact />

            <Route path="/employees" component={PeoplePage} data={employee} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
