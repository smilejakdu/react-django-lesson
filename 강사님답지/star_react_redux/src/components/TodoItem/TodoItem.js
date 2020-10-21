import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.complete !== nextProps.complete;
    }

    render() {
        const {
            complete,
            children,
            completeHandler,
            deleteHandler,
        } = this.props;

        return (
            <li className="list-group-item pt-1 pb-1" onClick={completeHandler}>
                <div className="form-row">
                    <div className="col-1 pl-0">
                        <input className="align-bottom" type="checkbox" checked={complete} readOnly/>
                    </div>
                    <div className="col-9 pl-0">
                        <label className={`${cx({ complete })} mb-0 todo-content`}>{children}</label>
                    </div>
                    <div className="col-2 pl-0">
                        <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={(e) => {
                                deleteHandler();
                                e.stopPropagation();
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </li>
        );
    }
}

export default TodoItem;
