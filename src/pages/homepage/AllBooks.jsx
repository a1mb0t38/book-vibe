import React, { use } from 'react';
import { CiStar } from 'react-icons/ci';

const bookPromise = fetch('/booksData.json').then(res => res.json())

const AllBooks = () => {

    const books = use(bookPromise);
    console.log("books", books);
    return (
        <div className='my-9 container mx-auto'>
            <h3 className='font-bold text-3xl text-center mb-6'>Books</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                books.map(book => {
                    return <div className="card bg-base-100 shadow-sm">
                        <figure className='p-6'>
                            <img
                                src={book.image} className='rounded-xl h-[250px]'
                                alt={book.bookName} />
                        </figure>
                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                {
                                book.tags.map(tag => {
                                    return <div className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
                                })
                            }
                            </div>
                            <h2 className="card-title font-bold text-xl">
                                {book.bookName}
                            </h2>
                            <p className='font-semibold text-lg'>{book.author}</p>
                            <p></p>
                            <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl
                            ">
                                <div className="font-semibold">{book.category}</div>
                                <div className="flex items-center gap-2 ">{book.rating} <CiStar></CiStar></div>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    );
};

export default AllBooks;