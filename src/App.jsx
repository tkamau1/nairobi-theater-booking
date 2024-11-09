import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import BookingPage from './pages/BookingPage';
import CustomersPage from './pages/CustomersPage';
import EventsPage from './pages/EventsPage';
import ReportsPage from './pages/ReportsPage';
import DashboardStats from './shared/DashboardStats';

const App = () => {
    const [activeView, setActiveView] = useState('booking'); // Default active view is 'booking'

    const handleNavigation = (viewId) => {
        setActiveView(viewId);
    };

    return (
        <Layout onNavigate={handleNavigation} activeView={activeView}>
            {/* Conditional rendering based on active view */}
            {activeView === 'booking' && <BookingPage />}
            {activeView === 'events' && <EventsPage />}
            {activeView === 'reports' && <ReportsPage />}
            {activeView === 'customers' && <CustomersPage />}
        </Layout>
    );
};

export default App;