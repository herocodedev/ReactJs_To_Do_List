import "./Todo.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "", tasks: [] };
  }
  render() {
    return (
      <div className="Todo aligned">
        <img
          src="/assest/complete.png"
          alt="add task"
          width="30px"
          style={{ cursor: "pointer" }}
          title="Hoàn Thành"
          onClick = {(e) => this.props.completeTask(this.props.id)}
        />
        <img
          src="/assest/delete.png"
          alt="add task"
          width="30px"
          style={{ cursor: "pointer" }}
          title="Xóa"
          onClick = {(e) => this.props.deleteTask(this.props.id)}
        />
        &nbsp; &nbsp;
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Todo;
