import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskname: " ",
      tasks: [],
    };
  }
  myTaskChangeHandler = (event) => {
    this.setState({taskname:event.target.value})
  }
  addTaskHandler = (event) => {
    this.state.tasks.push(this.state.taskname)
    let newTasks = this.state.tasks
    this.setState({tasks:newTasks})
    this.setState({taskname : ''})
  }
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
            onClick = {(e) => this.addTaskHandler(e)}
          />
          <input
            type="text"
            value = {this.state.taskname}
            onChange = {(e) => this.myTaskChangeHandler(e)}
          />
        </header>
        <ul style={{ listStyle: "none" }}>
          {this.state.tasks.map((val,index) => {
            return <li key = {index}>{val}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
