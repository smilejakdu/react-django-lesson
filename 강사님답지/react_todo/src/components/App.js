import React, { Component } from 'react';
import PageLayout from './PageLayout';
import TodoInsertform from './TodoInsertForm';
import TodoItemList from './TodoItemList';

class App extends Component {
    state = {
        input: '',
        todo_list: [],
    };
    
    id = 0;

    getItemId = () => {
        return this.id++;
    };

    changeHandler = (e) => {
        const { value } = e.target;
        this.setState({
            input: value,
        });
        console.log('change');
    };

    insertHandler = (e) => {
        const { todo_list, input } = this.state;
        const new_item = {
            content: input,
            complete: false,
            id: this.getItemId(),
        };
        this.setState({
            todo_list: [...todo_list, new_item],
            input: '',
        });
    };

    completeHandler = (id) => {
        const todo_list = [...this.state.todo_list];
        const index = todo_list.findIndex((todo_item) => todo_item.id === id);

        const change_item = {
            ...todo_list[index],
            complete:!todo_list[index].complete 
        };

        todo_list[index] = {...change_item}
        
        this.setState({
            todo_list: [
                ...todo_list
            ],
        });
    };

    deleteHandler = (id) => {
        const { todo_list } = this.state;
        const index = todo_list.findIndex((todo_item) => todo_item.id === id);

        this.setState({
            todo_list: [
                ...todo_list.slice(0, index),
                ...todo_list.slice(index + 1, todo_list.length),
            ],
        });
    };

    // 로컬스토리지에서 기존 데이터 불러오기
    componentDidMount() {
        const todo_list = localStorage.todo_list;
        if(todo_list) {
            const temp_todo = JSON.parse(todo_list);
            for (const [index, todo] of temp_todo.entries()) {
                todo.id = index;
            }
            this.setState({
                todo_list:[...temp_todo]
            })
            this.id = temp_todo.length;
        }
    }

    // 변경된 데이터 로컬스토리지에 저장하기
    componentDidUpdate(prevProps, prevState) {
        if(JSON.stringify(prevState.todo_list)!==JSON.stringify(this.state.todo_list)) {
            localStorage.todo_list = JSON.stringify(this.state.todo_list);
        }
    }

    render() {
        const { input, todo_list } = this.state;
        const {
            changeHandler,
            insertHandler,
            completeHandler,
            deleteHandler,
        } = this;
        return (
            <PageLayout>
                <TodoInsertform
                    onChange={changeHandler}
                    value={input}
                    insertHandler={insertHandler}
                />
                <TodoItemList
                    todo_list={todo_list}
                    completeHandler={completeHandler}
                    deleteHandler={deleteHandler}
                />
            </PageLayout>
        );
    }
}

export default App;
