import "./Todo.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props: ", props);
    this.state = { id: props.id, value: props.value, done: props.done };
  }

  completeTask = () => {
    console.log("Todo completeTask: ", this.props.id);
    this.setState({ done: true });
    this.props.completeTask(this.state.id);
  };
  render() {
    let checkDone = "";
    if (!this.state.done) {
      checkDone = (
        <img
          src="/assest/complete.png"
          alt="add task"
          width="30px"
          style={{ cursor: "pointer" }}
          title="Hoàn Thành"
          onClick={(e) => this.completeTask(this.props.id)}
        />
      );
    }
    return (
      <div className="Todo aligned">
        {checkDone}
        <img
          className = {this.state.done ? 'checkDone' : ''}
          src="/assest/delete.png"
          alt="add task"
          width="30px"
          style={{ cursor: "pointer" }}
          title="Xóa"
          onClick={(e) => this.props.deleteTask(this.props.id)}
        />
        &nbsp; &nbsp;
        <span className={this.state.done ? "done" : ""}>
          {this.props.value}
        </span>
      </div>
    );
  }
}

export default Todo;
