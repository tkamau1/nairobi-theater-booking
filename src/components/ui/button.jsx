import React from 'react';
import { clsx } from 'clsx';
import "../../index.css"

export const Button = React.forwardRef(({
                                            className,
                                            variant = "default",
                                            children,
                                            ...props
                                        }, ref) => {
    return (
        <button
            className={clsx(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                {
                    "bg-blue-500 text-white hover:bg-blue-600": variant === "default",
                    "border border-gray-200 hover:bg-gray-100": variant === "outline",
                },
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";