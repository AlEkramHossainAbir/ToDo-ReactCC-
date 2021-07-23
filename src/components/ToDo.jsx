import React, { Component } from "react";
import Data from "../data.json";
import Card from "./Card";
class ToDo extends Component {
  state = {
    todos: Data,
  };
  render() {
    const onDelete = (sno) => {
      console.log(sno);

      const newData = Data.filter((d) => d.sno !== sno);
      console.log(newData);
      this.setState({ todos: newData });
      console.warn(this.state.todos);

      // let index = Data.indexOf(val);
      // Data.splice(index, 1);
      // this.setState(
      //   console.warn(this.state.todo[val.sno])
      //   // this.state.todo.filter((e) => {
      //   //   val = "";
      //   // })
      // );
    };
    // this.componentDidMount = () => {
    //   {
    //     Data.map((posts) => this.setState({ todos: posts }));
    //   }
    //   console.warn(this.state);
    // };
    return (
      <div>
        {this.props.title}
        {console.warn(this.props.onDelete)};<h1>To Do List</h1>
        <div style={{ display: "flex" }}>
          {Data.map((posts) => (
            <Card
              title={posts.title}
              desc={posts.desc}
              key={posts.sno}
              onDelete={() => {
                onDelete(posts.sno);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ToDo;
