import React, { useState } from 'react';
import './BookContent.css';

const books = [
  // 🩺 Pregnancy Health & Wellness (IDs 1–10)
  { id: 1, title: 'The Pregnancy Guidebook', file: '1.pdf' },
  { id: 2, title: 'Antenatal Care & Skilled Birth Attendance', file: '2.pdf' },
  { id: 3, title: 'Self-Care During Pregnancy', file: '3.pdf' },
  { id: 4, title: 'Women’s Health Guide for Providers', file: '4.pdf' },
  { id: 5, title: 'Emotional Changes During Pregnancy', file: '5.pdf' },
  { id: 6, title: 'Labor and Delivery Care Manual', file: '6.pdf' },
  { id: 7, title: 'Managing Pregnancy & Childbirth Complications', file: '7.pdf' },
  { id: 8, title: 'Exercise & Stretching for Pregnancy', file: '10.pdf' },
  { id: 9, title: 'Complete Pregnancy Wellness Handbook', file: '11.pdf' },
  { id: 10, title: 'Healthy Eating Tips for Moms', file: '12.pdf' },

  // 🕉 Dharmik & Spiritual Wisdom (IDs 11–15)
  { id: 11, title: 'Agni Puran – Divine Wisdom', file: '8.pdf' },
  { id: 12, title: 'Garud Puran – Spiritual Knowledge', file: '9.pdf' },
  { id: 13, title: 'Shiv Puran – Sacred Narratives', file: '13.pdf' },
  { id: 14, title: 'Shrimad Bhagavatam – Life & Dharma', file: '14.pdf' },
  { id: 15, title: 'Vishnu Puran – Path of Devotion', file: '15.pdf' },
];

const BookContent = () => {
  const [activeBook, setActiveBook] = useState(null);

  const BookCard = ({ book }) => (
    <div className="book-card">
      <div className="book-icon">📘</div>
      <h3 className="book-title">{book.title}</h3>
      <button className="book-button" onClick={() => setActiveBook(book)}>
        Read Now
      </button>
    </div>
  );

  return (
    <div className="book-section">
      <h2 className="heading">🩺 Pregnancy Health & Wellness</h2>
      <div className="bookshelf">
        {books.filter(book => book.id <= 10).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <h2 className="heading">🕉 Dharmik & Spiritual Wisdom</h2>
      <div className="bookshelf">
        {books.filter(book => book.id > 10).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {activeBook && (
        <div className="modal-overlay" onClick={() => setActiveBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveBook(null)}>✖</button>
            <h3 className="modal-title">{activeBook.title}</h3>
            <iframe
              src={`/pdfs/${activeBook.file}`}
              width="100%"
              height="600px"
              title="PDF Viewer"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookContent;


