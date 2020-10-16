import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todo_list !== nextProps.todo_list;
    }
    render() {
        const { todo_list, completeHandler, deleteHandler } = this.props;
        const todoItems = todo_list.map((todo_item) => {
            const { id, complete, content } = todo_item;
            return (
                <TodoItem
                    key={id}
                    complete={complete}
                    completeHandler={() => completeHandler(id)}
                    deleteHandler={() => deleteHandler(id)}
                >
                    {content}
                </TodoItem>
            );
        });
        return (
            <ul className="list-group col-6 mx-auto mt-2 mb-5">
                {todoItems}
            </ul>
        );
    }
}

export default TodoItemList;
