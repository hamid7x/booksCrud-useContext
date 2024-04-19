import React, { useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import { booksContext } from '../context/bookContext';

const Delete = () => {
    const  navigate = useNavigate();
    
    const [books, setBooks] = useContext(booksContext);

    const {id} = useParams();
    const filtredBooks = books.filter(el=>el.id !== id);

    useEffect(() => {
        setBooks(filtredBooks)
        navigate('/books', { replace: true})
    
    }, []);
    return 
}

export default Delete;
