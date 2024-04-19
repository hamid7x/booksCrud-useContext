import React, { useState, useContext } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {booksContext} from "../context/bookContext";

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });


  const [books, setBooks] = useContext(booksContext)
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name]: value
    })
  };

  const handleClick = (e) => {
    const newBook = {id: uuid(), title: formData.title, author: formData.author};
    if(!formData.title || !formData.author) return

    setBooks([...books, newBook])
    setFormData({
        title: '',
        author: ''
    })
    navigate('/books', { replace: true})
  };
  return (
    <div className="w-full flex justify-center my-9">
      <div className="w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Add New Book</h2>
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
          Add
        </Button>
      </div>
    </div>
  );
};

export default Add;
