
// 4. Customer Management Interface
import {useState} from "react";
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
import { Plus, Edit, Trash, Users } from "lucide-react";
import Input from "../ui/input.jsx";

const CustomerManagementInterface = () => {
    const [customers, setCustomers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Regular' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901', status: 'Season' },
        { id: 3, name: 'Bob Wilson', email: 'bob@example.com', phone: '345-678-9012', status: 'VIP' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState({
        id: null,
        name: '',
        email: '',
        phone: '',
        status: 'Regular',
    });
    // Handle Edit Click
    const handleEdit = (customerId) => {
        const customerToEdit = customers.find((customer) => customer.id === customerId);
        setCurrentCustomer(customerToEdit);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    // Handle Delete Click
    const handleDelete = (customerId) => {
        const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
        setCustomers(updatedCustomers);
    };

    // Handle Add New Customer Click
    const handleAddCustomer = () => {
        setCurrentCustomer({
            id: null,
            name: '',
            email: '',
            phone: '',
            status: 'Regular',
        });
        setIsEditing(false);
        setIsModalOpen(true);
    };
    // Handle Form Submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Update existing customer
            const updatedCustomers = customers.map((customer) =>
                customer.id === currentCustomer.id ? currentCustomer : customer
            );
            setCustomers(updatedCustomers);
        } else {
            // Add new customer
            const newCustomer = { ...currentCustomer, id: customers.length + 1 };
            setCustomers([...customers, newCustomer]);
        }
        setIsModalOpen(false);
    };

    // Handle Input Change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
    };

    return (
        <div className="w-full mx-auto p-4 -mt-14 ">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="flex items-center text-black">
                            <Users className="mr-2" />
                            Customer Management
                        </CardTitle>
                        <div className="flex space-x-2">
                            <Input
                                type="search"
                                placeholder="Search customers..."
                                className="w-64 bg-white"
                            />
                            <Button className="flex items-center" onClick={handleAddCustomer}>
                                <Plus className="mr-2 h-4 w-4" /> Add Customer
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell>{customer.name}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>{customer.phone}</TableCell>
                                    <TableCell>
                    <span className={`px-2 py-1 rounded text-sm ${
                        customer.status === 'Season' ? 'bg-green-100 text-green-800' :
                            customer.status === 'VIP' ? 'bg-purple-100 text-purple-800' :
                                'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
                    </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="bg-blue-100 hover:bg-blue-200"
                                                onClick={() => handleEdit(customer.id)}
                                            >
                                                <Edit className="h-4 w-4 text-blue-600" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="bg-red-100 hover:bg-red-200"
                                                onClick={() => handleDelete(customer.id)}
                                            >
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            {/* Modal for Adding/Editing Customer */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4">
                            {isEditing ? "Edit Customer" : "Add New Customer"}
                        </h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={currentCustomer.name}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-md bg-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={currentCustomer.email}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-md bg-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={currentCustomer.phone}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-md bg-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Status</label>
                                    <select
                                        name="status"
                                        value={currentCustomer.status}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-md bg-gray-400"
                                    >
                                        <option value="Regular">Regular</option>
                                        <option value="Season">Season</option>
                                        <option value="VIP">VIP</option>
                                    </select>
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

export default CustomerManagementInterface