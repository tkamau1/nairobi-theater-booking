import React, { useState } from 'react';
import Header from './Header';

const Layout = ({ children, onNavigate, activeView }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);  // Track sidebar visibility

    return (
        <div className="flex flex-col w-screen h-screen bg-white dark:bg-gray-800">
            <Header
                activeView={activeView}
                onNavigate={onNavigate}
            />  {/* Pass toggle function to header */}
            <div className="flex flex-1 ">
                <main className="flex-1 p-1 overflow-y-auto bg-white">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
