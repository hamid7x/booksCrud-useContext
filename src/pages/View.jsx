
import React, { useContext } from 'react';
import { Link,useParams } from 'react-router-dom';
import {  booksContext } from '../context/bookContext';
const View = () => {
    const {id} = useParams();
    const [books] = useContext(booksContext);
    const book = books.filter(el=>el.id === id);

    return (
        <div className='text-center mt-10'>
            <h2 className='text-xl font-bold mb-10'>View Book with ID: {id}</h2>
            <h2 className='text-lg'><b>Title: </b>  {book[0].title}</h2>
            <h2 className='text-lg'><b>Author: </b> {book[0].author}</h2>

            <Link className='text-[#1677ff]' to={'/books'}>Back</Link>
        </div>
    );
}

export default View;
