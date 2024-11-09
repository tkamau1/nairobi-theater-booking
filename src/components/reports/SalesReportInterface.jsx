import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import {  LineChart } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {useState} from "react";
import ResponsiveChart from "./ResponsiveChart.jsx";

// 3. Sales Report Interface
const SalesReportInterface = () => {

    const [selectedPeriod, setSelectedPeriod] = useState("daily");

    // Sample sales data for different periods
    const salesData = [
        { month: "Jan", sales: 4000, tickets: 200 },
        { month: "Feb", sales: 3000, tickets: 150 },
        { month: "Mar", sales: 5000, tickets: 250 },
        { month: "Apr", sales: 4500, tickets: 225 },
        { month: "May", sales: 6000, tickets: 300 },
        { month: "Jun", sales: 4800, tickets: 240 },
        { month: "Jul", sales: 5200, tickets: 260 },
        { month: "Aug", sales: 5300, tickets: 265 },
        { month: "Sep", sales: 4700, tickets: 235 },
        { month: "Oct", sales: 6100, tickets: 305 },
        { month: "Nov", sales: 6600, tickets: 330 },
        { month: "Dec", sales: 7000, tickets: 350 },
    ];

    const dailyData = [
        { day: "Mon", sales: 700, tickets: 35 },
        { day: "Tue", sales: 800, tickets: 40 },
        { day: "Wed", sales: 650, tickets: 30 },
        { day: "Thu", sales: 900, tickets: 45 },
        { day: "Fri", sales: 950, tickets: 50 },
        { day: "Sat", sales: 1100, tickets: 55 },
        { day: "Sun", sales: 1200, tickets: 60 },
    ];

    const weeklyData = [
        { week: "Week 1", sales: 5000, tickets: 250 },
        { week: "Week 2", sales: 7000, tickets: 350 },
        { week: "Week 3", sales: 6500, tickets: 325 },
        { week: "Week 4", sales: 8000, tickets: 400 },
    ];

    const yearlyData = [
        { year: "2020", sales: 55000, tickets: 2750 },
        { year: "2021", sales: 60000, tickets: 3000 },
        { year: "2022", sales: 75000, tickets: 3750 },
        { year: "2023", sales: 82000, tickets: 4100 },
    ];

    const getChartData = () => {
        switch (selectedPeriod) {
            case "daily":
                return dailyData;
            case "weekly":
                return weeklyData;
            case "yearly":
                return yearlyData;
            case "monthly":
                return salesData;
            default:
                return salesData;
        }
    };

    // Display label for Y-axis based on selected data
    const yAxisLabel = "Sales ($)";
    const periodLabel = selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1);


    return (
        <div className="w-full max-w-7xl mx-auto -mt-14 p-4">
            <Card className="mb-4">
                <CardHeader>
                    <div className="flex justify-between items-center ">
                        <CardTitle className="flex items-center text-black">
                            <LineChart className="mr-2" />
                            Sales Reports
                        </CardTitle>
                        <Select defaultValue={selectedPeriod} onChange={(value) => setSelectedPeriod(value)}>
                            <SelectTrigger className="w-36 py-1 h-10 bg-gray-500 hover:bg-gray-700">
                                <SelectValue placeholder="Select period"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="yearly">Yearly</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Display the selected period */}
                        <div className="text-center mb-4">
                            <p className="text-xl font-semibold text-gray-600">
                                {periodLabel} Sales Performance
                            </p>
                        </div>

                        {/* Responsive Chart Container */}
                        <ResponsiveChart
                            data={getChartData()}
                            selectedPeriod={selectedPeriod}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-gray-500">Total Sales</p>
                                        <p className="text-2xl font-bold">$22,500</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-gray-500">Tickets Sold</p>
                                        <p className="text-2xl font-bold">1,125</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-gray-500">Average Price</p>
                                        <p className="text-2xl font-bold">$20</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
export default SalesReportInterface