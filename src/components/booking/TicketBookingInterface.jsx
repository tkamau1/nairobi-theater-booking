import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Calendar, User, Info } from 'lucide-react';

const TicketBookingInterface = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState({
        name: 'Romeo and Juliet',
        date: 'November 10, 2024',
        time: '7:30 PM',
        price: '$50'
    });

    const handleSeatClick = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const handleBooking = () => {
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat');
            return;
        }
        alert(`Booking confirmed for seats: ${selectedSeats.map(s => s + 1).join(', ')}`);
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle className="flex items-center text-black">
                        <Calendar className="mr-2" />
                        Event Selection
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4 text-black">
                            <div className="p-4 border rounded">
                                <h3 className="font-bold mb-2">Event Details</h3>
                                <div className="space-y-2">
                                    <p>Name: {selectedEvent.name}</p>
                                    <p>Date: {selectedEvent.date}</p>
                                    <p>Time: {selectedEvent.time}</p>
                                    <p>Price per ticket: {selectedEvent.price}</p>
                                </div>
                            </div>

                            <div className="p-4 border rounded">
                                <h3 className="font-bold mb-2">Booking Summary</h3>
                                <div className="space-y-2">
                                    <p>Selected Seats: {selectedSeats.length}</p>
                                    <p>Total Amount: ${selectedSeats.length * 50}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 border rounded">
                                <h3 className="font-bold mb-2 flex items-center">
                                    Seating Chart
                                    <Info className="ml-2 h-4 w-4 text-gray-400" />
                                </h3>
                                <div className="grid grid-cols-6 gap-2">
                                    {[...Array(24)].map((_, i) => (
                                        <Button
                                            key={i}
                                            variant={selectedSeats.includes(i) ? "default" : "outline"}
                                            className="w-8 h-8"
                                            onClick={() => handleSeatClick(i)}
                                        >
                                            {i + 1}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <User className="h-5 w-5" />
                                <span>Selected Seats: {selectedSeats.map(s => s + 1).join(", ")}</span>
                            </div>
                            <Button
                                className="px-4 py-2"
                                onClick={handleBooking}
                            >
                                Book Tickets
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TicketBookingInterface;