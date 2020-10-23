import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

// html : 컨텐츠와 구조 (jsx)
// js : 상태값 변경, ui갱신
// css : 글씨 색상, 크기, 테두리 굵기,
// cx({ complete })
// cx({ 'complete':complete })
class TodoItem extends Component {
    render() {
        const { children, deleteHandler, completeHandler, complete } = this.props;
        return (
            <div onClick={completeHandler} className={`${cx({ complete })} test`}>
                <input type="checkbox" readOnly />
                {children}
                <button onClick={deleteHandler}>delete</button>
            </div>
        );
    }
}

export default TodoItem;
