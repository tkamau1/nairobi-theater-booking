import React from 'react';
import EventManagementInterface from '../components/events/EventManagementInterface';

const EventsPage = () => {
    return (
        <div className="page-container">
            <h1>Manage Events</h1>
            <EventManagementInterface />
        </div>
    );
};

export default EventsPage;
