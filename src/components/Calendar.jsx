import React from 'react';
import { useEvents } from '../context.js/EventContext';
import EventList from './EventList';


const Calendar = () => {
  const { events } = useEvents();
  return (
    <div className="calendar-container">
      <h1 className="text-xl font-bold">Monthly Calendar</h1>
      <EventList events={events} />
    </div>
  );
};

export default Calendar;
