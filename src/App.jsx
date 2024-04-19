import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Add from './pages/AddBook'
import Books from './pages/Books';
import Nav from './Components/Nav';
import View from './pages/View';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import BooksContextProvider from './context/bookContext';

function App() {

  return (
          <BooksContextProvider>
              <Router>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Add />}/>
                    <Route path='/books' element={<Books />}/>
                    <Route path='/books/:id' element={<View />}/>
                    <Route path='/edit/:id' element={<Edit />}/>
                    <Route path='/delete/:id' element={<Delete />}/>
                </Routes>
              </Router>
        </BooksContextProvider>
  )
}

export default App
