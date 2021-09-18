import "./App.css";
import React from "react";
import react from "react";
import TodoList from "./TodoList";
class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { task: "", tasks: [] };
  }

  render() {
    return (
      <div className="App">
        <table class="table" border="1">
          <thead>
            <tr>
              <th scope="col">Nhiệm vụ 1</th>
              <th scope="col">Nhiệm vụ 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                  <TodoList name="Đi chợ" />
              </th>
              <th scope="row">
                  <TodoList name="Đi Shopping" />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
