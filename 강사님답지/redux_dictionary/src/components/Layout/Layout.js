import React, { Component } from 'react';
import styles from './Layout.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Layout extends Component {
    render() {
        const {children} = this.props;

        return (
            <div>
            <div className="navbar fixed-top bg-success">
                <h5 className="my-0 mr-md-auto font-weight-normal text-white">
                    React&Redux Dictionary
                </h5>

                <a className="btn btn-outline-light text-white" href="http://actingprogrammer.tv" target="_blank">
                    Go YouTube Channel
                </a>
            </div>
            <div className="container mt-5 pt-5 mx-auto text-center">
                <h1 className="display-4">Memorize!!</h1>
            </div>
            <div className="container pb-5">{children}</div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
                <div className="container">
                    <a href="http://actingprogrammer.tv" target="_blank">COPYRIGHT (c) 2020 ActingProgrammer - Baepeu. Powered by React</a>
                </div>
            </nav>
        </div>
        );
    }
}

export default Layout;