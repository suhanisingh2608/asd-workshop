# 🚀 ASD Workshop — Express.js Backend & Product API

A RESTful backend application built using **Node.js and Express.js**, featuring structured API routing, product management, JSON-based data storage, and caching middleware.

## ✨ Features

* RESTful API architecture
* Modular MVC-inspired project structure
* Product data management
* JSON-based database
* Custom caching middleware
* Organized controllers, routes, and services
* Postman resources for API testing
* Asynchronous request handling

## 🛠️ Tech Stack

| Technology   | Purpose            |
| ------------ | ------------------ |
| Node.js      | JavaScript runtime |
| Express.js   | Backend framework  |
| JavaScript   | Application logic  |
| JSON         | Data storage       |
| Postman      | API testing        |
| Git & GitHub | Version control    |

## 📁 Project Structure

```text
asd-workshop/
│
├── controllers/
│   └── product_controller.js
│
├── database/
│   ├── data.js
│   └── db.json
│
├── middleware/
│   └── cache_middleware.js
│
├── routes/
│   └── routes.js
│
├── services/
│   └── product_service.js
│
├── postman/
├── .postman/
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

## ⚙️ Getting Started

### Prerequisites

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/suhanisingh2608/asd-workshop.git
```

Navigate to the project directory:

```bash
cd asd-workshop
```

Install dependencies:

```bash
npm install
```

### Run the application

```bash
node index.js
```

## 🔌 API Overview

The backend provides product-related API functionality through Express.js routes and controllers.

### Architecture

```text
Client Request
      ↓
Express Server
      ↓
Routes
      ↓
Cache Middleware
      ↓
Controller
      ↓
Service Layer
      ↓
JSON Data Store
      ↓
API Response
```

## 🧠 Key Concepts Implemented

* Separation of concerns through modular architecture
* Middleware-based request processing
* Asynchronous JavaScript
* Product data handling
* Caching for improved response efficiency
* REST API development

## 👩‍💻 Author

**Suhani Singh**

B.Tech — Artificial Intelligence & Machine Learning

GitHub: [@suhanisingh2608](https://github.com/suhanisingh2608)

---


