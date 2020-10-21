import React, { Component } from 'react';

// 할일을 등록할 수 있는 form

class TodoInsertForm extends Component {
    
    render() {
        const { onChange, value, insertHandler } = this.props;
        return (
            <div>
                <input type="text" onChange={onChange} value={value} />
                <button onClick={insertHandler}>입력</button>
            </div>
        );
    }
}

export default TodoInsertForm;
