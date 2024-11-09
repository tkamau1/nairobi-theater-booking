import React, { useEffect, useState, useRef } from 'react';
import {
    LineChart as RechartsLineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const ResponsiveChart = ({ data, selectedPeriod }) => {
    const containerRef = useRef(null);

    const getXAxisDataKey = () => {
        switch (selectedPeriod) {
            case "daily":
                return "day";
            case "weekly":
                return "week";
            case "yearly":
                return "year";
            case "monthly":
            default:
                return "month";
        }
    };

    return (
        <div ref={containerRef} className="w-full h-64 bg-white p-4 rounded-lg shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey={getXAxisDataKey()}
                        tick={{ fill: '#6b7280' }}
                        axisLine={{ stroke: '#9ca3af' }}
                    />
                    <YAxis
                        tick={{ fill: '#6b7280' }}
                        axisLine={{ stroke: '#9ca3af' }}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#ffffff",
                            borderRadius: "8px",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                        formatter={(value) => [`$${value}`, value === data.sales ? "Sales" : "Tickets"]}
                        labelStyle={{ color: '#374151' }}
                    />
                    <Legend
                        wrapperStyle={{
                            paddingTop: '10px'
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ fill: '#8884d8', stroke: '#8884d8', strokeWidth: 2 }}
                        activeDot={{ r: 6 }}
                        name="Sales"
                    />
                    <Line
                        type="monotone"
                        dataKey="tickets"
                        stroke="#82ca9d"
                        strokeWidth={2}
                        dot={{ fill: '#82ca9d', stroke: '#82ca9d', strokeWidth: 2 }}
                        activeDot={{ r: 6 }}
                        name="Tickets"
                    />
                </RechartsLineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResponsiveChart;