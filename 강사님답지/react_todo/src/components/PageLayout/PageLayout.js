import React from 'react';
import styles from './PageLayout.scss';

const PageLayout = ({ children }) => {
    return (
        <div>
            <div className="navbar fixed-top bg-primary">
                <h5 className="my-0 mr-md-auto font-weight-normal text-white">
                    React Todo
                </h5>

                <a className="btn btn-outline-light text-white" href="http://actingprogrammer.tv" target="_blank">
                    Go YouTube Channel
                </a>
            </div>
            <div className="container mt-5 pt-5 mx-auto text-center">
                <h1 className="display-4">Write your things to do!</h1>
                <div className="alert alert-light">
                    You have to write something important in your daily life.
                    <br />
                    It will help you with doing these things.
                    <br />
                    And you will achieve your goal.
                </div>
            </div>
            <div className="container">{children}</div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
                <div className="container">
                    <a href="http://actingprogrammer.tv" target="_blank">COPYRIGHT (c) 2020 ActingProgrammer - Baepeu. Powered by React</a>
                </div>
            </nav>
        </div>
    );
};

export default PageLayout;
