import "./App.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "", tasks: [] };
  }
  render() {
    return (
      <div className="App">
        <img
          src="/assest/complete.png"
          alt="add task"
          width="30px"
          style={{ cursor: "pointer" }}
          title="Hoàn Thành"
        />
        <img
          src="/assest/delete.png"
          alt="add task"
          width="30px"
          style={{ cursor: "pointer" }}
          title="Xóa"
        />
        &nbsp; &nbsp;
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Todo;
