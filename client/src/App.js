import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";
import ItemModalContainer from "./components/itemModalContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModalContainer />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
