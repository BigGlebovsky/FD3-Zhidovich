import React from 'react';
import BookListItem from '../book-list-item'

import './book-list';

class BookList extends React.Component {
    
    
    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (<li></li>)
                    }) 
                }
            </ul>
        )
    }
}

export default BookList;