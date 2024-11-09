# Nairobi Theater Booking System

The **Nairobi Theater Booking System** is a comprehensive web application designed to manage theater events, ticket bookings, customer details, and generate reports. It allows admins to manage theater events, set ticket prices, and view performance data, while customers can book tickets for upcoming events. This project is aimed at providing an efficient system for both event organizers and theatergoers.

## Features

- **Event Management**: Add, edit, and delete theater events. Set event details such as name, date, time, capacity, and ticket price.
- **Ticket Booking**: Customers can book tickets for available events based on the seat capacity and price.
- **Customer Management**: Track customers' booking history and their contact details.
- **Reports**: Generate reports on ticket sales, revenue, and customer bookings.
- **Responsive Design**: The app is responsive and works seamlessly on both desktop and mobile devices.

## Technologies Used

- **Frontend**: 
  - React for building the user interface
  - Tailwind CSS for styling
  - Lucide-react icons for UI elements

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/nairobi-theater-booking.git
   cd nairobi-theater-booking
   ```

2. **Install dependencies**:
     ```bash
     npm install
     ```

3. **Run the development server**:
     ```bash
     npm run dev
     ```

4. Open the app in your browser at `http://localhost:5173` (or the appropriate URL based on your configuration).

## Features

- **Admin Dashboard**: 
  - Manage events: Add, edit, delete event details.
  - View booking history and revenue reports.
  - Manage customers and bookings.
  
- **Customer Dashboard**:
  - Browse events: View upcoming events, ticket prices, and available seats.
  - Book tickets for events.
  - View and manage booking history.

## File Structure

Here’s a breakdown of the main directories and files in the project:

```
nairobi-theater-booking/
  ├── src/                    
  │   ├── components/         # React components (Header, Sidebar, Event Management, etc.)
  │   │   ├── booking/        # Components related to booking functionality
  │   │   │   └── TicketBookingInterface.jsx
  │   │   ├── customers/      # Components related to customer management
  │   │   │   └── CustomerManagementInterface.jsx
  │   │   ├── events/         # Components related to event management
  │   │   │   └── EventManagementInterface.jsx
  │   │   ├── layout/         # Layout-related components (Header, Sidebar, etc.)
  │   │   │   ├── Header.jsx
  │   │   │   └── Layout.jsx
  │   │   ├── reports/        # Components related to reports (e.g., sales, attendance)
  │   │   │   ├── ResponsiveChart.jsx
  │   │   │   └── SalesReportInterface.jsx
  │   │   └── ui/             # Reusable UI components (e.g., buttons, tables, inputs)
  │   │       ├── button.jsx
  │   │       ├── card.jsx
  │   │       ├── input.jsx
  │   │       ├── select.jsx
  │   │       └── table.jsx
  │   ├── App.js              # Main app component, including routing logic
  │   └── index.js            # Entry point for React app, renders App.js to the DOM
  └── public/                 
  |    ├── index.html          # Main HTML template for the app
  |   └── assets/             # Static assets (images, fonts, etc.)
  └── README.md                   # Project documentation, setup instructions, and usage details

```

## Configuration

You can configure the app as follows:
- Customize the event categories, ticket prices, and customer notifications in the backend if needed.

## Contributing

We welcome contributions! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your changes (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework.
- **Lucide-react**: A collection of open-source SVG icons.
