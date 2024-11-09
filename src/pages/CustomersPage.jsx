import React from 'react';
import CustomerManagementInterface from '../components/customers/CustomerManagementInterface';

const CustomersPage = () => {
    return (
        <div className="page-container">
            <h1>Customer Management</h1>
            <CustomerManagementInterface />
        </div>
    );
};

export default CustomersPage;
