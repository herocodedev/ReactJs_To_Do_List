import "./App.css";
import React from "react";
import react from "react";
import Todo from "./Todo";
class TodoList extends react.Component {
  constructor(props) {
    super(props);
    this.state = {todoListName:props.name ,task: "", tasks: [] };
  }
  myChangeTaskHandler = (event) => {
    //console.log(event.target.value);
    this.setState({ task: event.target.value });
  };
  addTaskHandler = (event) => {
    if (this.state.task === " ") return;
    const id = this.state.tasks.length;
    const name = this.state.task;
    this.state.tasks.push({ id, value: name, done: false });
    let newTasks = this.state.tasks;
    this.setState({ tasks: newTasks });
    this.state.task = "";
    console.log(newTasks);
  };

  deleteTask = (id) => {
    let newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  completeTask = (id) => {
    this.state.tasks.forEach((task) => {
      if (task.id === id) {
        task.done = true;
      }
    });
    let newTasks = this.state.tasks;
    this.setState({ tasks: newTasks });
    console.log(newTasks);
  };
  render() {
    return (
      <div className="App">
        {this.state.todoListName}
        <header className="App-header">
          <img
            src={process.env.PUBLIC_URL + "/assest/add.png"}
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
        <ul style={{ listStyle: "none", padding: 0 }}>
          {this.state.tasks.map((val, index) => {
            return (
              <Todo
                key={index}
                data={val}
                deleteTask={this.deleteTask}
                completeTask={this.completeTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
