# 💰 Full-Stack Expense Tracker

A modern, responsive full-stack Expense Tracker application built with the **MERN** stack (MongoDB, Express, React, Node.js). Track your income and expenses, view real-time balance analytics with dynamic charts, and manage your financial transactions easily.

---

## 🚀 Features

- **Dashboard Analytics**: Visual representation of total income, expenses, and current balance using Chart.js.
- **Income Management**: Add, view, and delete income streams with categories and dates.
- **Expense Tracking**: Add, view, and delete expenses categorized by education, groceries, health, travel, etc.
- **Transaction History**: Real-time sorted log of recent transactions with min/max highlights.
- **Session Persistence**: Session login state stored in `localStorage` so refreshing the browser keeps you logged in.
- **Interactive UI**: Animated background orb, modern Glassmorphism theme, and styled-components.

---

## 🛠️ Tech Stack

### **Frontend**
- **React** (Create React App)
- **Styled Components** for component styling
- **Chart.js** & **react-chartjs-2** for data visualization
- **Axios** for API requests
- **React Datepicker** for date input
- **React Context API** for global state management

### **Backend**
- **Node.js** & **Express.js** REST API
- **MongoDB** & **Mongoose ODM**
- **Nodemon** for development auto-reloads
- **dotenv** & **CORS** middleware

---

## 📁 Project Structure

```text
ExpenseTracker/
├── backend/
│   ├── controllers/      # Route logic (income.js, expense.js)
│   ├── db/               # Database connection logic
│   ├── models/           # Mongoose schemas (IncomeModel.js, ExpenseModel.js)
│   ├── routes/           # Express API endpoints (transactions.js)
│   ├── .env              # Environment config (git-ignored)
│   ├── app.js            # Express server entry point
│   └── package.json
├── frontend/
│   └── expensetracker/   # React application source code
│       ├── public/
│       ├── src/
│       │   ├── Components/   # React UI components (Dashboard, Income, Expenses, Login, etc.)
│       │   ├── context/      # GlobalContext provider
│       │   ├── styles/       # Layouts and GlobalStyle
│       │   └── App.js
│       └── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Prerequisites

- **Node.js** (v16+ recommended)
- **npm** or **yarn**
- **MongoDB** running locally on `mongodb://127.0.0.1:27017` or a **MongoDB Atlas** connection string

---

## 🚀 Quick Start Guide

### 1. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install
```

Ensure your `.env` file contains:
```env
PORT = 5000
MONGO_URL = mongodb://127.0.0.1:27017/expense_tracker
```

Start the backend server:
```bash
npm start
```
*The Express server will start on port `5000` and connect to MongoDB.*

---

### 2. Frontend Setup

In a new terminal window:

```bash
# Navigate to the React frontend directory
cd frontend/expensetracker

# Install dependencies
npm install

# Start React dev server
npm start
```
*The web app will open automatically at [http://localhost:3000](http://localhost:3000).*

---

## 🔑 Demo Credentials

Use the following credentials to access the app:

| Field | Value |
| :--- | :--- |
| **Email** | `abc@gmail.com` |
| **Password** | `abc` |

---

## 📡 API Reference

Base URL: `http://localhost:5000/api/v1`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/add-income` | Create new income entry |
| `GET` | `/get-incomes` | Retrieve all income entries |
| `DELETE` | `/delete-income/:id` | Remove income entry by ID |
| `POST` | `/add-expense` | Create new expense entry |
| `GET` | `/get-expenses` | Retrieve all expense entries |
| `DELETE` | `/delete-expense/:id` | Remove expense entry by ID |
