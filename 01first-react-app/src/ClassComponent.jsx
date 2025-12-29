import React from "react";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "Hello From Class Component!"
    };
  }

  // Class method
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Lifecycle method
  componentDidMount() {
    console.log("Component mounted!");
  }

  render() {
    return (
      <div style={{ padding: '20px', border: '2px solid blue', margin: '10px' }}>
        <h2>Class Component Example</h2>
        <p>{this.state.message}</p>
        <p>Count: {this.state.count}</p>
        
        <button onClick={this.handleIncrement} style={{ margin: '5px' }}>
          Increment
        </button>
        <button onClick={this.handleDecrement} style={{ margin: '5px' }}>
          Decrement
        </button>
        
      </div>
    );
  }
}

export default ClassComponent;