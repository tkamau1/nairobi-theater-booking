// Import necessary dependencies
import React from "react";

// Table Wrapper Component
export const Table = ({ children, className }) => {
    return (
        <div className={`w-full overflow-x-auto ${className}`}>
            <table className="min-w-full divide-y divide-gray-200">{children}</table>
        </div>
    );
};

// Table Header Component
export const TableHeader = ({ children }) => {
    return <thead className="bg-gray-100">{children}</thead>;
};

// Table Row Component
export const TableRow = ({ children, className }) => {
    return (
        <tr className={`hover:bg-gray-50 ${className}`}>
            {children}
        </tr>
    );
};

// Table Head (Column Header) Component
export const TableHead = ({ children, className }) => {
    return (
        <th
            scope="col"
            className={`px-6 py-3 text-left text-sm font-semibold text-gray-700 ${className}`}
        >
            {children}
        </th>
    );
};

// Table Body Component
export const TableBody = ({ children }) => {
    return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;
};

// Table Cell Component
export const TableCell = ({ children, className }) => {
    return (
        <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-700 ${className}`}>
            {children}
        </td>
    );
};
