import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={ShoppingCart} />
            {/* <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/customers" exact component={CustomersList} /> */}
            {/* <Route path="/cart" exact component={ShoppingCart} /> */}
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
