import React, {Component} from 'react';
import TodoInsertForm from '../components/TodoInsertForm';

// 연결하기 위한
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//
import * as formActions from '../modules/form';

// TodoInsertForm 컴포넌트에게 상태값을 전달해줄 컨테이너
class TestContainer extends Component {
    render() {
        const {value} = this.props;
        return (
            <TodoInsertForm value={value} 
            />
        );
    }
}

// 컨테이너에게 액션을 연결을 한다.
// 나는 어떤 상태값을 사용하고 있어
// 나는 어떤 액션이 일어나는 것에 관심이 있어(구독)
export default connect(
    (state) => ({
        value:state.form.get('value')
    })
)(TestContainer);

