# React Q&A

---

## 1. What is JSX, and why is it used?

**JSX** (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.  
It is used in React to describe the UI structure in a declarative way, making code easier to read and maintain.

---

## 2. What is the difference between State and Props?

- **State**: Represents data that is managed within a component and can change over time.
- **Props**: Short for properties, passed from parent to child components. They are read-only and cannot be modified by the receiving component.

---

## 3. What is the useState hook, and how does it work?

**`useState`** is a React hook that lets you add state to functional components.  
It provides a state value and a function to update it. Updating the state triggers a re-render of the component.

---

## 4. How can you share state between components in React?

State can be shared by:

1. **Lifting state up** – moving shared state to a common parent and passing it via props.
2. **Using Context API** – allows global state sharing without prop drilling.
3. **State management libraries** – such as Redux or Zustand for complex applications.

---

## 5. How is event handling done in React?

Event handling in React uses camelCase syntax and functions.  
Events like clicks, changes, or submissions are handled by passing functions to the corresponding event attributes.

---

---

# Customer Support Ticket System

A modern, responsive React-based customer support ticket management system designed to streamline ticket tracking and resolution workflow. Built with React.js, Tailwind CSS, and DaisyUI, featuring real-time status management and toast notifications.

## 🎯 Project Overview

This application provides a comprehensive ticket management interface where users can:

- Browse and manage customer support tickets
- Track tickets as they progress through resolution
- Monitor real-time statistics for in-progress and resolved tickets
- Receive instant feedback through toast notifications

---

## ✨ Features

### Core Features

- **📋 Ticket Management**: Display and manage customer tickets with detailed information
- **📊 Real-time Statistics**: Live count of in-progress and resolved tickets via Banner component
- **🎯 Task Tracking**: Move tickets to "Task Status" section for active tracking
- **✅ Resolution Workflow**: Mark tickets as complete, automatically updating statistics
- **🔔 Toast Notifications**: Elegant React-Toastify notifications for all actions
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: DaisyUI components with Tailwind CSS styling

### Components

- **Navbar**: Navigation with logo and "New Ticket" button
- **Banner**: Statistics display for in-progress and resolved tickets
- **TicketList**: Grid layout of all customer tickets
- **TicketCard**: Individual ticket details with metadata
- **TicketActionCard**: Task status section with completion functionality
- **ResolvedTasks**: Display and track completed tickets
- **Footer**: Professional footer section

---

## 🛠️ Technology Stack

| Category          | Technology                            |
| ----------------- | ------------------------------------- |
| **Framework**     | React.js v19.2.0                      |
| **Styling**       | Tailwind CSS v4.2.1 + DaisyUI v5.5.19 |
| **Build Tool**    | Vite v7.3.1                           |
| **Icons**         | React Icons v5.6.0                    |
| **Notifications** | React-Toastify v11.0.5                |
| **Language**      | JavaScript (ES6+)                     |
| **Markup**        | HTML5                                 |

---

## 📁 Project Structure

```
mr2-ticket-system/
├── public/
│   └── tickets.json              # Sample ticket data
├── src/
│   ├── assets/
│   │   └── reference-design/     # Figma design reference
│   │       └── mr2-Customer Support Ticket System.fig
│   ├── components/
│   │   ├── Banner.jsx            # Statistics banner component
│   │   ├── Footer.jsx            # Footer component
│   │   ├── Navbar.jsx            # Navigation bar component
│   │   ├── ResolvedTasks.jsx      # Resolved tickets display
│   │   ├── TicketActionCard.jsx   # Task status section
│   │   ├── TicketCard.jsx         # Individual ticket card
│   │   └── TicketList.jsx         # Ticket list container
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # Global styles and Tailwind config
│   └── main.jsx                  # React entry point
├── index.html                    # HTML template
├── package.json                  # Project dependencies
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── README.md                     # This file
```

---


## 📊 Ticket Data Structure

Each ticket includes the following properties:

```json
{
  "id": "number",
  "title": "string",
  "description": "string",
  "customer": "string",
  "priority": "High | Medium | Low",
  "status": "Open | In Progress | Completed",
  "createdAt": "ISO date string"
}
```

---

## 🔄 Workflow Logic

### Ticket Progression

1. **Initial State**: Tickets appear in the "Customer Tickets" section with "Open" status
2. **In Progress**: Click a ticket card to add it to "Task Status" (status changes to "In Progress")
3. **Completed**: Click "Complete" button to move ticket to "Resolved Tasks" (status changes to "Completed")

### Statistics Update

- **In Progress Count**: Increases when a ticket is added to Task Status
- **Resolved Count**: Increases when a ticket is marked as complete
- Both counts update in the Banner component in real-time

---

## 🎨 Customization

### Styling

- Colors and spacing use Tailwind CSS utilities
- DaisyUI components for consistent design
- Modify `src/index.css` for global style changes

### Tickets Data

- Edit `public/tickets.json` to modify sample tickets
- Add more tickets with the specified structure

---

## ✅ Quality Assurance

- **ESLint Configuration**: Project includes ESLint for code quality
- **Responsive Design**: Tested across multiple device sizes
- **Error Handling**: Proper state management and error boundaries
- **Toast Notifications**: User feedback for all major actions

---

## 🔗 Links

- **Live Demo**: [https://mr2-cs-ticket-system.netlify.app/](https://mr2-cs-ticket-system.netlify.app/)
- **GitHub Repository**: [https://github.com/shad910/mr2-ticket-system](https://github.com/shad910/mr2-ticket-system)

---


## 👨‍💻 Author

**Md Sahadot Hossen Shad**

- Email: [shadshs91@gmail.com](mailto:shadshs91@gmail.com)
- Facebook: [shadshs91](https://www.facebook.com/shadshs91/)
- Instagram: [@shadshs91](https://www.instagram.com/shadshs91/)
- Twitter: [@shadshs91](https://x.com/shadshs91)
- LinkedIn: [Md Sahadot Hossen Shad](https://www.linkedin.com/in/md-sahadot-hossen-shad-838251345/)


---

**Made with ❤️ by Shad**

---

## 📄 License

This project is created for educational purposes as part of an assignment.

---

**Happy Coding! 🚀**

---

