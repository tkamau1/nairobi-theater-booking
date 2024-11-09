import React, { useState } from "react";

// Main Select Component
export const Select = ({ children, defaultValue, onChange }) => {
    const [value, setValue] = useState(defaultValue || "");
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (val) => {
        setValue(val);
        setIsOpen(false);
        if (onChange) onChange(val);
    };

    return (
        <div className="relative">
            {React.Children.map(children, (child) => {
                if (child.type === SelectTrigger) {
                    return React.cloneElement(child, { value, onClick: () => setIsOpen(!isOpen) });
                }
                if (child.type === SelectContent && isOpen) {
                    return React.cloneElement(child, { value, onSelect: handleSelect });
                }
                return null;
            })}
        </div>
    );
};

// Select Trigger Component
export const SelectTrigger = ({ value, onClick, children, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

// Select Value Component
export const SelectValue = ({ placeholder }) => {
    return <span>{placeholder}</span>;
};

// Select Content Component
export const SelectContent = ({ children, onSelect }) => {
    return (
        <div className="absolute bg-white border rounded shadow-md mt-1 text-black">
            {React.Children.map(children, (child) => {
                if (child.type === SelectItem) {
                    return React.cloneElement(child, { onSelect });
                }
                return null;
            })}
        </div>
    );
};

// Select Item Component
export const SelectItem = ({ value, children, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(value)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 "
        >
            {children}
        </div>
    );
};
