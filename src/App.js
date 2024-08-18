import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import 'tailwindcss/tailwind.css';
import { EventProvider } from './context.js/EventContext';


function App() {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </Router>
    </EventProvider>
  );
}

export default App;
