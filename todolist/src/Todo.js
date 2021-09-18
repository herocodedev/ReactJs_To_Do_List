import "./Todo.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    console.log("props: ", props);
    // this.state = { id: props.id, value: props.value, done: props.done };
    super(props);
    this.state = { data:props.data };
  }

  static getDerivedStateFromProps(props, state) {
    return {data:props.data};
  }

  // completeTask = () => {
  //   // console.log("Todo completeTask: ", this.props.id);
  //   // this.setState({ done: true });
  //   this.props.completeTask(this.state.data.id);
  // };
  render() {
    console.log(this.props)
    let checkDone = "";
    if (!this.state.data.done) {
      checkDone = (
        <img
          src="/assest/complete.png"
          alt="add task"
          width="30px"
          style={{ cursor: "pointer" }}
          title="Hoàn Thành"
          onClick={(e) => this.props.completeTask(this.state.data.id)}
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
          onClick={(e) => this.props.deleteTask(this.props.data.id)}
        />
        &nbsp; &nbsp;
        <span className={this.state.data.done ? "done" : ""}>
          {this.state.data.name}
        </span>
      </div>
    );
  }
}

export default Todo;
