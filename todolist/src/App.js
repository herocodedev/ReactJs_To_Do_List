import "./App.css";
import React from "react";
import TodoList from "./TodoList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskname: " ",
      tasks: [],
    };
  }

  render() {
    return (
      <div className="App">
        <table className="table" border='1'>
          <thead>
            <tr>
              <th scope="col">Nhiệm vụ 1</th>
              <th scope="col">Nhiệm vụ 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <TodoList name="Đi Chợ" />
              </th>
              <th scope="row">
                <TodoList name="Đi Chợ" />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
