import React from 'react';
import { useEvents } from '../context.js/EventContext';

const EventModal = ({ eventId, onClose }) => {
  const { events, deleteEvent } = useEvents();
  const event = events.find(e => e.id === eventId);

  if (!event) return null;

  return (
    <div className="modal">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Category: {event.category}</p>
      <button onClick={() => deleteEvent(eventId)}>Delete</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EventModal;
