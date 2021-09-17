import "./App.css";
import React from "react";
import Todo from "./Todo";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskname: " ",
      tasks: [],
    };
  }
  myTaskChangeHandler = (event) => {
    this.setState({ taskname: event.target.value });
  };
  addTaskHandler = (event) => {
    if(this.state.taskname ===' '){
      return;
    }
    const id = this.state.tasks.length
    const name = this.state.taskname
    this.state.tasks.push({id,name,done:false});
    let newTasks = this.state.tasks;

    this.setState({ tasks:newTasks });
    this.setState({ taskname: "" });
    console.log(this.state.tasks)
  };

  deleteTask = (id) =>{
    console.log('List: ',this.state.tasks)
    console.log('deleteTask from Parent: ',id)
    
    let newTasks = this.state.tasks.filter(task => task.id !==id)
    this.setState({tasks:newTasks})
  }

  completeTask = (id) => {
    console.log('List: ',this.state.tasks)
    console.log('Completask: ',id)
    
    const tasks = this.state.tasks
    tasks.forEach(task => {
      if(task.id===id)
        task.done = true
    })

    this.setState({tasks})

    // let tasks = this.state.tasks.filter(task => task.id ===id)
    // console.log('task muon complete: ',tasks)
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
            onClick={(e) => this.addTaskHandler(e)}
          />
          <input
            type="text"
            value={this.state.taskname}
            onChange={(e) => this.myTaskChangeHandler(e)}
          />
        </header>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {this.state.tasks.map((val, index) => {
            return <Todo ref="todo" key={index} id={val.id} value={val.name} deleteTask={this.deleteTask} completeTask={this.completeTask}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
