import React, { Component } from "react";
import Quote from "./quote";
import Image from "./image";
import Name from "./name";
import { connect } from "react-redux";
import "../App.css";

class Quotes extends Component {
  render() {
    const { simpsons } = this.props;
    if (!simpsons) {
      return <p>Loading</p>;
    }

    return simpsons.map((item) => {
      return (
        <div key={item.quote} className="quote">
          <div>
            <Name item={item} />
          </div>
          <div>
            <Image item={item} />
          </div>
          <div>
            <Quote item={item} />
          </div>
          <h2>
            <button onClick={() => this.props.removeCharacter(item.quote)}>
              Remove
            </button>
          </h2>
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  return { simpsons: state.simpsons };
}

export default connect(mapStateToProps)(Quotes);
