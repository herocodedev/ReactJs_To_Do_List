import "./Todo.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:props.data};
  }

  render() {
    let checkDone = "";
    if (!this.state.data.done) {
      checkDone = (
        <img
          src={process.env.PUBLIC_URL + "/assest/complete.png"}
          alt="add task"
          width="30px"
          style={{ cursor: "pointer" }}
          title="Hoàn Thành"
          onClick={(e) => this.props.completeTask(this.state.data.id)}
        />
      );
    } else{
      checkDone = ""
    }
    return (
      <div className="Todo aligned">
        {checkDone}
        <img
          src={process.env.PUBLIC_URL + '/assest/delete.png'}
          alt="add task"
          width="30px"
          style={{ cursor: "pointer" }}
          title="Xóa"
          onClick={(e) => this.props.deleteTask(this.props.data.id)}
        />
        &nbsp; &nbsp;
        <span className={this.state.data.done ? "done" : ""}>
          {this.props.data.value}
        </span>
      </div>
    );
  }
}

export default Todo;
