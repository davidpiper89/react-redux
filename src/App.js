import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Quotes from "./components/quotes";
import AddChar from "./components/AddChar";

class App extends Component {
  async componentDidMount() {
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`;
    const result = await axios.get(url);
    this.props.dispatch({ type: "SET_SIMPSONS_API", payload: result.data });
  }

  render() {
    return (
      <>
        <h1>Simpsons quotes</h1>
        <AddChar />
        <h2>
          Search: <input></input>
        </h2>
        <Quotes />
      </>
    );
  }
}

export default connect()(App);
