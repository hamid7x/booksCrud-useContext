import React, {useContext} from 'react';
import {booksContext} from "../context/bookContext";
import { Link } from 'react-router-dom';

const Books = () => {
    const [books] = useContext(booksContext);
    
    return (
        <div className=''>
            <h2 className='font-bold text-3xl text-center my-9'>All Books</h2>
            <div className='grid grid-cols-3 gap-4 px-10'>
                {books && books.length > 0 ? (
                    books.map(el => (
                        <div className='shadow-custom rounded  ' key={el.id}>
                            <div className='p-4 pb-8'>
                                <h2 ><b>Title:</b> {el.title}</h2>
                                <h2><b>Author:</b> {el.author}</h2>
                            </div>
                            <div className='p-2 border-t border-[#e6e6e7] flex '>
                                <button className='text-lg font-bold capitalize text-[#009688]  mr-5'><Link to={`/books/${el.id}`}>view</Link></button>
                                <button className='text-lg font-bold capitalize text-[#03a9f4]  mr-5'><Link to={`/edit/${el.id}`}>edit</Link></button>
                                <button className='text-lg font-bold capitalize text-[#f44036]  mr-5'><Link to={`/delete/${el.id}`}>delete</Link></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-lg'>No books available</p>
                )}
            </div>
        </div>
    );
}

export default Books;
