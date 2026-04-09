import React from 'react';
import { CiStar } from 'react-icons/ci';

const BookCard = ({book}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                        <figure className='p-6'>
                            <img
                                src={book.image} className='rounded-xl h-[250px]'
                                alt={book.bookName} />
                        </figure>
                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                {
                                book.tags.map((tag,index) => {
                                    return <div key={index} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
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
        </div>
    );
};

export default BookCard;