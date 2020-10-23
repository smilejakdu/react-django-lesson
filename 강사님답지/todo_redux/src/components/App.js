import React, { Component } from "react";
import PageLayout from "./PageLayout";
import TodoInsertForm from "./TodoInsertForm";
import TodoItemList from "./TodoItemList";
import TodoInsertFormContainer from "../containers/TodoInsertFormContainer";
import {
  HeaderBorder,
  HeaderFont,
  AppBody,
  MemorizeFont,
  TableHeader,
} from "./App.styled";
/*
    리액트 - 단순한 형태의 앱
    리덕스 - 복잡한 형태의 앱(검색) - redux, react-redux, ducks, redux saga
    - html(html 4.1, html5, xhtml), css(css2, css3), js(jquery, es5 es2015) => 용어 정리
    - 블로그, git blog -> 
    - python, django (python 개발 환경) - python 3.8.5 이하

*/
class App extends Component {
  /*
        1. 액션(액션타입) - 어떤 이벤트
        2. 리듀서 - 해당 이벤트가 발생하면 어떤 상태값을 어떻게할거냐?
        3. 어떤 컨테이너(컴포넌트)에 상태값과 이벤트를 연결할거다.
        3-1. 상태값은 구독
        3-2. 이벤트는 발생시킬 수 있다.
    */
  render() {
    return (
      <div>
        <HeaderBorder>
          <HeaderFont>React&Redux Diction</HeaderFont>
        </HeaderBorder>
        <PageLayout>
          <AppBody>
            <center>
              <MemorizeFont>Memorize!!</MemorizeFont>
              <TodoInsertFormContainer />
              <TodoItemList />
            </center>
          </AppBody>
        </PageLayout>
      </div>
    );
  }
}

export default App;
