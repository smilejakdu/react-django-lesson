import InsertFormContainer from 'containers/InsertFormContainer';
import WordItemListContainer from 'containers/WordItemListContainer';
import React, { Component } from 'react';

import Layout from './Layout';

class App extends Component {
    render() {
        return (
            <Layout>
                <InsertFormContainer />
                <WordItemListContainer />
            </Layout>
        );
    }
}

export default App;