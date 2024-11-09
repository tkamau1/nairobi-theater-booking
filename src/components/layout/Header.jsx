import React from 'react';
import { BarChart2, Calendar, Theater, Ticket, Users } from 'lucide-react';

const Header = ({ activeView, onNavigate }) => {
    const menuItems = [
        { id: 'booking', label: 'Ticket Booking', icon: Ticket },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'reports', label: 'Reports', icon: BarChart2 },
        { id: 'customers', label: 'Customers', icon: Users },
    ];

    return (
        <header className="bg-white shadow-md">
            {/* Top Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-500 p-2 rounded-lg transform transition-transform hover:scale-105">
                            <Theater className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Nairobi Theater System
                            </h1>
                            <p className="text-sm text-gray-500">Management Dashboard</p>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center space-x-4">
                        <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <span className="text-white font-medium">A</span>
                            </div>
                            <div>
                                <span className="text-sm font-medium text-gray-900">Admin</span>
                                <p className="text-xs text-gray-500">System Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-around">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`
                  flex items-center px-2 py-2 text-sm font-medium 
                  transition-all duration-200 ease-in-out bg-gray-200
                  hover:bg-gray-100
                  ${
                                    activeView === item.id
                                        ? 'text-blue-600 border-b-2 border-blue-500 bg-white'
                                        : 'text-gray-600 hover:text-blue-500'
                                }
                `}
                            >
                                <item.icon className={`
                  mr-2 h-5 w-5 transition-transform duration-200
                  ${activeView === item.id ? 'transform scale-110' : ''}
                `} />
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;