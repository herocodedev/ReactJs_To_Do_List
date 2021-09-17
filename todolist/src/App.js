import "./App.css";
import React from "react";
import react from "react";
import Todo from "./Todo";
class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { task: "", tasks: [] };
  }
  myChangeTaskHandler = (event) => {
    //console.log(event.target.value);
    this.setState({ task: event.target.value });
  };
  addTaskHandler = (event) => {
    console.log(this.state.task);
    this.state.tasks.push(this.state.task);
    let newTask = this.state.tasks;
    console.log(newTask);
    this.setState({ tasks: newTask });
    this.state.task = "";
    console.log(this.state.task);
  };
  render() {
    return (
      <div className="App">
        <br />
        <h1>TodoList</h1>
        <header className="App-header">
          <img
            src="/assest/add.png"
            alt="add task"
            width="30px"
            style={{ cursor: "pointer" }}
            title="Bấm Để thêm Task"
            onClick={() => this.addTaskHandler()}
          />
          <input
            value={this.state.task}
            type="text"
            onChange={this.myChangeTaskHandler}
          />
        </header>
        <ul style={{ listStyle: "none" }}>
          {this.state.tasks.map((val, index) => {
            return <Todo key={index} value={val}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
