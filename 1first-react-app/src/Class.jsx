import React from "react";

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <hr />
        <div>
          <h1>Count: {this.state.count}</h1>
          <br />
          <br />
          <button onClick={this.handleClick}>ADD COUNT</button>
        </div>
        <hr />
      </>
    );
  }
}

export default Class;
