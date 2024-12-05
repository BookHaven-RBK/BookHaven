import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3004/book/books", book);
      navigate("/home");
    } catch (err) {
      setError("Failed to add book. Please try again.");
      console.error("Error adding book:", err);
    }
  };

  return (
    <div className="bg-book-background min-h-screen p-8">
      <div className="max-w-md mx-auto book-card">
        <h1 className="text-3xl font-bold text-book-primary mb-6">
          Add New Book
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-book-text mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={book.title}
              onChange={handleChange}
              required
              className="input-field w-full"
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-book-text mb-1">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={book.author}
              onChange={handleChange}
              required
              className="input-field w-full"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-book-text mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={book.description}
              onChange={handleChange}
              required
              className="input-field w-full h-32"
            ></textarea>
          </div>
          <div>
            <label htmlFor="price" className="block text-book-text mb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={book.price}
              onChange={handleChange}
              required
              step="0.01"
              min="0"
              className="input-field w-full"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-book-text mb-1">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={book.image}
              onChange={handleChange}
              required
              className="input-field w-full"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
