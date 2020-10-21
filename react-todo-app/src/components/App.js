import React, { Component } from "react";
import PageLayout from "./PageLayout/PageLayout";
import TodoInsertForm from "./TodoInsertForm/TodoInsertForm";
import TodoItemList from "./TodoItemList/TodoItemList";

class App extends Component {
  // 컴포넌트 동작을 위해 필요한 기능 함수 , 변수
  state = {
    input: "",
    todo_list: [],
  };

  changeHandler = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  id = 0;

  getItemId = () => {
    return this.id++;
  };

  insertHandler = (e) => {
    // 할일을 추가
    const { todo_list, input } = this.state;

    if (input.length === 0) {
      alert("내용을 입력하세요.");
    } else {
      const new_item = {
        content: input,
        complete: false,
        id: this.getItemId(),
      };

      this.setState({
        input: "",
        todo_list: [...todo_list, new_item],
      });
    }
  };

  deleteHandler = (id) => {
    // state : 어떤 값 , 내용
    // state 는 직접 변수에 접근해서 수정하면 안된다.
    const { todo_list } = this.state;
    const index = todo_list.findIndex((todo_item) => todo_item.id === id);

    this.setState({
      todo_list: [
        ...todo_list.slice(0, index),
        ...todo_list.slice(index + 1, todo_list.length),
      ],
    });
  };

  render() {
    const { input, todo_list } = this.state;
    const { changeHandler, insertHandler, deleteHandler } = this;

    return (
      <div>
        hello React
        <PageLayout>
          <TodoInsertForm
            onChange={changeHandler}
            value={input}
            insertHandler={insertHandler}
          />
          <TodoItemList todo_list={todo_list} deleteHandler={deleteHandler} />
        </PageLayout>
      </div>
    );
  }
}

export default App;
