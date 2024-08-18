import React, { useState } from 'react';
import { useEvents } from '../context.js/EventContext';

const EventForm = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const { addEvent } = useEvents();

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ id: Date.now(), date, title, category });
    setDate('');
    setTitle('');
    setCategory('');
  };

  return (
     <form onSubmit={handleSubmit} className="event-form bg-white p-6 border border-gray-300 rounded-lg shadow-md max-w-md mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-teal-700">Add New Event</h2>
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" required className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        >
          <option value="">Select Category</option>
          <option value="Work">Office</option>
          <option value="Personal">Personal</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
