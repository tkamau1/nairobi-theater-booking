import React from 'react';
import TicketBookingInterface from '../components/booking/TicketBookingInterface';
import Layout from "../components/layout/Layout.jsx";
import Header from "../components/layout/Header.jsx";

const BookingPage = () => {
    return (
        <div className="bg-white">
            {/*<Header> </Header>*/}
            <TicketBookingInterface />
        </div>
    );
};

export default BookingPage;
