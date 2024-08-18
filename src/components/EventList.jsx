import React from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from '../context.js/EventContext';

const EventList = ({ events }) => {
  const { deleteEvent } = useEvents();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id);
    }
  };

  return (
     <div className="event-list mt-4 max-w-3xl mx-auto px-4">
      {events.length === 0 ? (
        <p className="text-gray-600 text-center">No events to display</p>
      ) : (
        <ul className="list-disc pl-5">
          {events.map(event => (
            <li key={event.id} className="mb-4 border border-gray-300 bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="flex-1">
                <Link to={`/event/${event.id}`} className="text-teal-600 hover:underline">
                  <div className="font-semibold text-lg">{event.title}</div>
                  <div className="text-sm text-gray-700">Date: {event.date}</div>
                  <div className="text-sm text-gray-500">Category: {event.category}</div>
                </Link>
              </div>
              <button
                onClick={() => handleDelete(event.id)}
                className="mt-4 sm:mt-0 sm:ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
