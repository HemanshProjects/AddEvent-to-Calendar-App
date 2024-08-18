import React from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import Filter from '../components/Filter';

const Home = () => {
  return (
    <div className="home">
      <Filter />
      <Calendar />
      <EventForm />
    </div>
  );
};

export default Home;
