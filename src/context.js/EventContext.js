import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('All');

  const addEvent = (event) => setEvents([...events, event]);
  const editEvent = (id, updatedEvent) => setEvents(events.map(e => e.id === id ? updatedEvent : e));
  const deleteEvent = (id) => setEvents(events.filter(e => e.id !== id));
  const filteredEvents = events.filter(e => filter === 'All' || e.category === filter);

  return (
    <EventContext.Provider value={{ events: filteredEvents, addEvent, editEvent, deleteEvent, setFilter }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
