import React, { use } from 'react';

import BookCard from '../../components/ui/BookCard';

const bookPromise = fetch('/booksData.json').then(res => res.json())

const AllBooks = () => {

    const books = use(bookPromise);
    // console.log("books", books);
    return (
        <div className='my-9 container mx-auto'>
            <h3 className='font-bold text-3xl text-center mb-6'>Books</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                books.map((book,index) => {
                    return <BookCard key={index} book={book}></BookCard>
                })
            }
            </div>
        </div>
    );
};

export default AllBooks;