import { clsx } from 'clsx';

export function Card({ className, ...props }) {
    return (
        <div className={clsx("bg-white rounded-lg shadow", className)} {...props} />
    );
}

export function CardHeader({ className, ...props }) {
    return (
        <div className={clsx("p-6", className)} {...props} />
    );
}

export function CardTitle({ className, ...props }) {
    return (
        <h3 className={clsx("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
    );
}

export function CardContent({ className, ...props }) {
    return (
        <div className={clsx("p-6 pt-0", className)} {...props} />
    );
}