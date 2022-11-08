import React, { Component } from "react";
import { connect } from "react-redux";

class AddChar extends Component {
  onInput = (e) => {
    
    this.props.dispatch({ type: "ADD_SIMPSONS_CHAR", [e.target.name]: e.target.value });
  };
//   addCharacter = () => {
//     const indexOf = this.state.listQuotes.data.findIndex(
//       (item) => item.quote === this.state.quote
//     );

//     if (indexOf > -1) {
//       return;
//     }

//     const copy = { ...this.state };
//     copy.listQuotes.data.unshift({
//       quote: this.state.quote,
//       character: this.state.character,
//       image: "",
//       characerDirection: "Left",
//     });
//     this.setState({ ...copy, character: "", quote: "" });
//   };

  render() {
    return (
      <h2 onInput={this.onInput}>
        Add Character:
        <input name="char"></input>
        and quote:
        <input name="quote"></input>
        <button>Add</button>
      </h2>
    );
  }
}

function mapStateToProps(state) {
  return { simpsons: state.simpsons };
}

export default connect(mapStateToProps)(AddChar);
