import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

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

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
