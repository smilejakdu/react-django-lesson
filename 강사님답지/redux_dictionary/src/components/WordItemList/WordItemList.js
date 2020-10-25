import WordItem from 'components/WordItem/WordItem';
import React, { Component } from 'react';

class WordItemList extends Component {
    render() {
        const { words, deleteHandler } = this.props;

        const word_items = words.map((word, index) => {
            return (
                <WordItem
                    key={index}
                    word={word}
                    deleteHandler={deleteHandler}
                />
            );
        });
        return (
            <table className="table">
                <thead>
                    <tr className="row">
                        <th scope="col" className="col-1">
                            #
                        </th>
                        <th scope="col" className="col-2">
                            Word
                        </th>
                        <th scope="col" className="col-8">
                            Meaning
                        </th>
                        <th scope="col" className="col-1">
                            Del
                        </th>
                    </tr>
                </thead>
                <tbody>{word_items}</tbody>
            </table>
        );
    }
}

export default WordItemList;
