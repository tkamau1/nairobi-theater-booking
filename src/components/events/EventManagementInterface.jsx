import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.jsx";
import { Button } from "../ui/button.jsx";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { Plus, Edit, Trash } from "lucide-react";

const EventManagementInterface = () => {
    const [events, setEvents] = useState([
        { id: 1, name: "Romeo and Juliet", date: "2024-11-10", time: "19:30", capacity: 200, price: 50 },
        { id: 2, name: "The Lion King", date: "2024-11-15", time: "20:00", capacity: 250, price: 75 },
        { id: 3, name: "Hamlet", date: "2024-11-20", time: "19:00", capacity: 180, price: 45 },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEvent, setCurrentEvent] = useState({
        id: null,
        name: "",
        date: "",
        time: "",
        capacity: 0,
        price: 0,
    });

    // Handle Edit Click
    const handleEdit = (eventId) => {
        const eventToEdit = events.find((event) => event.id === eventId);
        setCurrentEvent(eventToEdit);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    // Handle Delete Click
    const handleDelete = (eventId) => {
        const updatedEvents = events.filter((event) => event.id !== eventId);
        setEvents(updatedEvents);
    };

    // Handle Add New Event Click
    const handleAddEvent = () => {
        setCurrentEvent({
            id: null,
            name: "",
            date: "",
            time: "",
            capacity: 0,
            price: 0,
        });
        setIsEditing(false);
        setIsModalOpen(true);
    };

    // Handle Form Submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Update existing event
            const updatedEvents = events.map((event) =>
                event.id === currentEvent.id ? currentEvent : event
            );
            setEvents(updatedEvents);
        } else {
            // Add new event
            const newEvent = { ...currentEvent, id: events.length + 1 };
            setEvents([...events, newEvent]);
        }
        setIsModalOpen(false);
    };

    // Handle Input Change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
    };

    return (
        <div className="w-full max-w-7xl -mt-14 mx-auto p-4">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center text-black">
                        <CardTitle>Event Management</CardTitle>
                        <Button
                            className="flex items-center"
                            onClick={handleAddEvent}
                        >
                            <Plus className="mr-2 h-4 w-4" /> Add Event
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Capacity</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {events.map((event) => (
                                <TableRow key={event.id}>
                                    <TableCell>{event.name}</TableCell>
                                    <TableCell>{event.date}</TableCell>
                                    <TableCell>{event.time}</TableCell>
                                    <TableCell>{event.capacity}</TableCell>
                                    <TableCell>${event.price}</TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="bg-blue-100 hover:bg-blue-200"
                                                onClick={() => handleEdit(event.id)}
                                            >
                                                <Edit className="h-4 w-4 text-blue-600" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="bg-red-100 hover:bg-red-200"
                                                onClick={() => handleDelete(event.id)}
                                            >
                                                <Trash className="h-4 w-4 text-red-600" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Modal for Adding/Editing Event */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4 ">
                            {isEditing ? "Edit Event" : "Add New Event"}
                        </h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={currentEvent.name}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-md bg-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={currentEvent.date}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-md bg-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={currentEvent.time}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-md bg-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Capacity</label>
                                    <input
                                        type="number"
                                        name="capacity"
                                        value={currentEvent.capacity}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-md bg-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={currentEvent.price}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-md bg-gray-400"
                                    />
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <Button type="button" onClick={() => setIsModalOpen(false)} className="bg-red-500">
                                        Cancel
                                    </Button>
                                    <Button type="submit" className="bg-blue-500 text-white">
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventManagementInterface