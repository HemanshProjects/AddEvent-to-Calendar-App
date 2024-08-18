import React from 'react';
import { useParams } from 'react-router-dom';
import EventModal from '../components/EventModal';

const EventDetails = () => {
  const { id } = useParams();
  return <EventModal eventId={parseInt(id)} onClose={() => window.history.back()} />;
};

export default EventDetails;
