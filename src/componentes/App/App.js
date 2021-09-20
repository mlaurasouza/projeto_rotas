import React from "react"
import './App.css';
import Header from "../Header/Header.js";
import { Route, Switch } from 'react-router'
import Inicio from "../Inicio/Inicio.js";
import Harley from "../Harley/Harley.js";
import Suzuki from "../Suzuki/Suzuki.js";
import Honda from "../Honda/Honda.js";
import Yamaha from "../Yamaha/Yamaha.js";
import Lambreta from "../Lambreta/Lambreta.js";
import City from "../City/City.js";
import CGTitan from "../CGTitan/CGTitan.js"

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Inicio />}></Route>
          <Route exact path="/harley" render={(props) => <Harley />}></Route>
          <Route exact path="/suzuki" render={(props) => <Suzuki />}></Route>
          <Route exact path="/honda" render={(props) => <Honda />}></Route>
          <Route exact path="/yamaha" render={(props) => <Yamaha />}></Route>
          <Route exact path="/lambreta" render={(props) => <Lambreta />}></Route>
          <Route exact path="/city" render={(props) => <City />}></Route>
          <Route exact path="/cgtitan" render={(props) => <CGTitan />}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
