import { Button, Input } from "antd";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { booksContext } from "../context/bookContext";

const Edit = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });

  const [books, setBooks] = useContext(booksContext);

  const  navigate = useNavigate();

  const { id } = useParams();
  const book = books.find((el) => el.id === id);

  useEffect(() => {

    if(book) {
      setFormData({
        title: book.title,
        author: book.author
    })
    }
  }, [book]);

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name]: value
    })
  };

  const handleClick = () => {
    const updatedBook = { id: book.id, title: formData.title, author: formData.author };
    const updatedBooksList = books.map((b) =>
      b.id === id ? updatedBook : b
    );
    setBooks(updatedBooksList);

    navigate('/books', { replace: true})
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex justify-center my-9">
      <div className="w-96">
      <Input
          className="mb-6"
          name='title'
          onChange={handleInputChange}
          placeholder="Book Name"
          value={formData.title}
        />
        <Input
          className="mb-6"
          name='author'
          placeholder="Author Name"
          onChange={handleInputChange}
          value={formData.author}
        />
        <Button
          className="w-full mx-auto shadow-lg shadow-blue-500/50"
          type="primary"
          onClick={handleClick}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Edit;
