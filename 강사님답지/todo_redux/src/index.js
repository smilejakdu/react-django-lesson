import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// 아무것도 없는 빈 프로젝트
// 1번 과제 : 빈 프로젝트 만들기까지 연습 3번 이상
// 화면에 표시되는 요소 -> 컴포넌트
// 메뉴바를 보여주고 싶다 -> 메뉴바 컴포넌트
// 회원가입 폼이 필요하다 -> 회원가입 컴포넌트
// 컴포넌트는 html로 레이아웃 구성 html == 컴포넌트
// 컴포넌트 만들기 1. 폴더 파일 구조 만들기
// 2. App.js <--- 가장 기본이되는 컴포넌트
// 3. 별도 기능이 필요한 컴포넌트 <----
// 3-1. 컴포넌트 이름으로 폴더만들기
// 3-2. 컴포넌트이름.js, 컴포넌트이름.scss, index.js

/*
    템플릿 언어 : php, asp, jsp
    <?php
     $a = 13;
     $b = $a * 7;
     echo $a;
    ?>
    웹 : 프론트(웹 브라우저) + 백엔드(서버 컴퓨터 동작하는 코드)
    프론트 : (js 리액트) + python django
    vue.js
    react.js
    이거 장고에 어떻게 붙여요?

    리액트를 쓸 때 백엔드는 뭘 쓰면 편해요?
    리액트를 쓸 때 백엔드에 장고를 쓸건데, 어떻게 하면 더 편해요?

    리액트랑 장고를 써서 프로젝트를 완성했는데 이거 어떻게 배포해요?

    디자인 패턴 -> 개발을 편하게 해보자!
    서비스를 만드는 사람들끼리 분업을 제대로 할 것이냐?
    프론트 + 백엔드 + 데이터베이스
    ajax
    프론트 : CSS Framework (bootstrap, bulma, mdl, ghost) -> vue.js, angular, react
    백엔드 : Framework(django, flask, laravel, ci, express, koa, spring)
    MVC, MVVM

    리액트 -> 버튼, 웹 페이지 호출됐다. (데이터 소요 발생했다.)
    리액트 -> API를 이용합니다.(데이터를 서버로 전송하거나, 달라고 요청하거나)
    웹 브라우저 -> 네트워크를 타고(http, https 2, 3)
    서버 -> API 호출이 들어오면 데이터를 가공해서(찾는다거나 계산하다거나) 응답을 합니다.
    네트워크를 타고 -> 웹 브라우저
    리액트 -> 전달받은 데이터를 처리

    리액트에서 -> 호출하기 전까지 준비 (모든 것을 소스코드 한곳에서 관리한다.)
    단점 : 시작점에서 수정 -> 소요처까지 내려가면서 다 수정
    리덕스 -> 소요가 있는 곳마다 별도로 분리를 해두자.
    리덕스 + 비동기 -> API를 이용(주거니 받거니)

    장고 : 백엔드 기본 구성 + API 기초
    고급 : DRF

    리덕스 : 디자인 패턴(설계상의 문제를 해결하기 위한 방법)
    MVC - 일감 나누기 힘들다.
    팩토리 패턴 - 반복적으로 어떤 키값 하나만 바뀌는걸 맨날 만들어야 돼(언어나 프레임워크)
    리덕스 : (옵저버, 이벤트 - 리스너)
    * 어떤 컨테이너 안에서 상태 관리 
    * 상태 관리를 컨테이너 바깥에서 하자(상태 관리소)
    * status값 안에 (요소 각각) -> 요소가 변경될 때마다 이벤트(액션)를 발생하겠다.
    * 해당 상태를 궁금해하는 컨테이너만 그 사실을 알면된다. 이벤트 리스너(구독)
    * 그 컨터이너만 갱신을 하자. dispatch
    * 
    1. 액션 타입 - 이벤트 이름 정하기 - 값추가
    2. 액션 - 이벤트 이름에 따른 함수 - 값추가 라는 이름을 가진 함수 만든다.

    3. 리듀스 - 액션이 발생했을 때 상태값을 어떻게 변경할거냐 - 값추가 라는 액션이 실행했으면
    나는 어떤 값을 (상태값에) 추가 저장하겠다.

    4. connect(dispatch) - 상태값이 변경되는지 나는 관심이 있다. + 해당 상태값을 나는 사용해
    나는 리스트를 갱신해야지

    5. 어떤 컨테이너 - 액션을 실행(호출)

    yarn add redux react-redux redux-actions
    yarn add immutable redux-logger

*/
// 여러 곳에 퍼져있는 상태값들을 한곳에서 모아서 관리하겠다.
import { createStore } from "redux";
import modules from "./modules";
// 만들어둔 리듀서를 보고 관리해야되는 상태값들을 파악해서 정리한다.
import { Provider } from "react-redux";
const store = createStore(modules);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
