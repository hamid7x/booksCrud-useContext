import { useState, createContext} from 'react'


export const booksContext = createContext();

const BooksContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);


    return(
        <booksContext.Provider value={[books, setBooks]}>
            {children}
        </booksContext.Provider>
    )

}


export default BooksContextProvider;