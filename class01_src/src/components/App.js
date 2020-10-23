import React, { Component } from "react";
import PageLayout from "./PageLayout";
import TodoInsertForm from "./TodoInsertForm";
import TodoItemList from "./TodoItemList";

class App extends Component {
  // 컴포넌트 동작을 위해 필요한 기능 함수, 변수
  state = {
    input: "",
    todo_list: [],
  };

  // 키보드로 입력을 할 때 (바뀐 입력 내용)을 -> 어딘가에 저장하려면
  changeHandler = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
    console.log("value chagned");
  };
  id = 0;

  getItemId = () => {
    return this.id++;
  };
  insertHandler = (e) => {
    // 할일을 추가
    const { todo_list, input } = this.state;
    const new_item = {
      content: input,
      complete: false,
      id: this.getItemId(),
    };
    this.setState({
      input: "",
      todo_list: [...todo_list, new_item],
    });
  };

  deleteHandler = (id) => {
    // state : 어떤 값, 내용
    // state는 직접 변수에 접근해서 수정하면 안된다.
    const { todo_list } = this.state;
    const index = todo_list.findIndex((todo_item) => todo_item.id === id);

    this.setState({
      todo_list: [
        ...todo_list.slice(0, index),
        ...todo_list.slice(index + 1, todo_list.length),
      ],
    });
  };

  completeHandler = (id) => {
    const todo_list = [...this.state.todo_list];
    const index = todo_list.findIndex((todo_item) => todo_item.id === id);

    const change_item = {
      ...todo_list[index],
      complete: !todo_list[index].complete,
    };

    todo_list[index] = { ...change_item };

    this.setState({
      todo_list: [...todo_list],
    });
  };

  render() {
    const { input, todo_list } = this.state;
    // const input = this.state.input;
    const {
      changeHandler,
      insertHandler,
      deleteHandler,
      completeHandler,
    } = this;
    return (
      <div>
        Hello React
        <PageLayout>
          <TodoInsertForm
            insertHandler={insertHandler}
            onChange={changeHandler}
            value={input}
          />
          <TodoItemList
            todo_list={todo_list}
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
          />
        </PageLayout>
      </div>
    );
  }
}

export default App;
