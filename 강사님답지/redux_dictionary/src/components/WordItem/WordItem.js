import React, { Component } from 'react';

class WordItem extends Component {
    render() {
        const { deleteHandler } = this.props;
        const { id, word, meaning } = this.props.word.toJS();
        return (
            <tr key={id} className="row">
                <td scope="col" className="col-1">{id}</td>
                <td scope="col"  className="col-2">{word}</td>
                <td scope="col"  className="col-8">{meaning}</td>
                <td scope="col" className="col-1"><button onClick={()=>{deleteHandler(id)}} className="btn btn-sm btn-outline-danger">Del</button></td>
            </tr>
        );
    }
}

export default WordItem;
