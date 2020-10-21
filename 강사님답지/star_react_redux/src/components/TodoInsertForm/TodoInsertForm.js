import React from 'react';
import styles from './TodoInsertForm.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInsertForm = ({ value, onChange, insertHandler }) => {
    const keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            insertHandler();
        }
    };
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 pl-2">
                
                    <div className="form-row">
                        <div className="col-10 pl-0">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="content"
                                placeholder="Write your things."
                                autoComplete="off"
                                onChange={onChange}
                                value={value}
                                onKeyPress={keyPressHandler}
                            />
                        </div>
                        <button
                            className="btn btn-primary btn-sm mb-0 col-2"
                            onClick={insertHandler}
                        >
                            Write
                        </button>
                    </div>
                
            </div>
            <div className="col-3"></div>
        </div>
    );
};

export default TodoInsertForm;
