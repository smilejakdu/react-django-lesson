import React from 'react';
// class형 : 내용이 수시로 변하는 컴포넌트
// const형 : 내용이 변하지 않는 컴포넌트
// 과제 : 컴포넌트 3개를 더 만드시오
// TodoInsertForm, TodoItem, TodoItemList
// class

const PageLayout = ({ children }) => {
    return (
        <div>
            PageLayout
            {children}
        </div>
    );
};

export default PageLayout;
