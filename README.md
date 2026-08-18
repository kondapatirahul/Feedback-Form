# Student Feedback System

A simple full-stack **Student Feedback System** that allows students to submit feedback for subjects and view submitted feedback responses.

The project demonstrates basic **frontend, backend, REST API, and database integration** using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

## Features

* Student feedback form
* Enter student name and subject
* Select rating from 1 to 5
* Add written comments
* Client-side form validation
* Submit feedback through a REST API
* Store feedback in MongoDB
* Retrieve and display submitted feedback
* Latest feedback displayed first
* Simple and clean user interface

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* CORS

### Database

* MongoDB
* MongoDB Compass

## Project Structure

```text
Feedback-Form/
│
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .gitignore
└── README.md
```

## Application Flow

```text
Student
   │
   ▼
Feedback Form
   │
   │ Submit Feedback
   ▼
JavaScript Frontend
   │
   │ POST /api/feedback
   ▼
Express.js Server
   │
   ▼
MongoDB
   │
   │ Stored Feedback
   ▼
GET /api/feedback
   │
   ▼
Feedback Responses
```

## API Endpoints

### Submit Feedback

```http
POST /api/feedback
```

The frontend sends the feedback data as JSON.

Example:

```json
{
  "name": "Rahul",
  "subject": "Full Stack Development",
  "rating": 5,
  "comment": "The subject was easy to understand."
}
```

### Get All Feedback

```http
GET /api/feedback
```

Returns the feedback records stored in MongoDB.

## Database Configuration

This project uses a **local MongoDB server**.

The backend connects using:

```text
mongodb://127.0.0.1:27017
```

The application uses:

```text
Database: feedbackDB
Collection: responses
```

Make sure MongoDB is running before starting the application.

## Prerequisites

Install the following before running the project:

* Node.js
* MongoDB Community Server
* MongoDB Compass (optional)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kondapatirahul/Feedback-Form.git
```

### 2. Navigate to the Project

```bash
cd Feedback-Form
```

### 3. Navigate to Backend

```bash
cd backend
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start MongoDB

Make sure your local MongoDB server is running.

You can use MongoDB Compass to verify the connection.

### 6. Start the Backend Server

```bash
npm start
```

The server will start at:

```text
http://localhost:3000
```

### 7. Open the Application

Open your browser and visit:

```text
http://localhost:3000
```

## How to Use

1. Open the application.
2. Enter your name.
3. Enter the subject name.
4. Select a rating from 1 to 5.
5. Write your feedback.
6. Click **Submit**.
7. The feedback is stored in MongoDB.
8. Submitted responses are displayed on the page.

## Learning Outcomes

This project was created to practice fundamental full-stack development concepts.

Through this project, I learned:

* Building a frontend using HTML and CSS
* Handling user input with JavaScript
* DOM manipulation
* JavaScript `fetch()` API
* Creating REST API endpoints
* Handling HTTP GET and POST requests
* Building a backend using Node.js and Express.js
* Connecting a Node.js application with MongoDB
* Inserting and retrieving MongoDB documents
* Connecting frontend and backend applications
* Understanding basic client-server architecture

## Future Improvements

Possible improvements for the project include:

* Student authentication
* Admin dashboard
* Edit and delete feedback
* Average rating calculation
* Rating statistics and charts
* Search and filtering
* Feedback timestamps
* Better error handling
* Environment variable configuration
* Online deployment

## Author

**Kondapati Rahul**

* GitHub: [kondapatirahul](https://github.com/kondapatirahul)

## License

This project is created for **learning and educational purposes**.
