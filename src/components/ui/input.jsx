// src/components/input.jsx
import React from "react";

// Input component - a simple functional component
const Input = ({ type, placeholder, className, ...props }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`border rounded-md p-2 ${className}`} // Add some default styling, can be customized with props
            {...props} // Spread any additional props like onChange, value, etc.
        />
    );
};

export default Input;
