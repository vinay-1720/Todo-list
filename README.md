# Todo Application with Login & Signup

A full-stack Todo Application built using HTML, CSS, JavaScript, FastAPI, SQLAlchemy, and PostgreSQL.

## Features

- User Signup
- User Login
- User-specific Todo Lists
- Add Tasks
- Delete Tasks
- Mark Tasks as Completed
- Persistent Data Storage using PostgreSQL
- FastAPI Backend APIs
- Responsive Frontend

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- FastAPI
- SQLAlchemy
- PostgreSQL
- Uvicorn

---

## Project Structure

```text
Todo_OWN/
│
├── login.html
├── signup.html
├── todo.html
├── style.css
├── script.js
├── login.js
├── signup.js
│
└── todo_backend/
    ├── main.py
    ├── models.py
    ├── database.py
    ├── database_models.py
    └── myenv/
```

## Database Tables

### Users Table

| Column | Type |
|----------|----------|
| id | Integer |
| username | String |
| password | String |

### Todos Table

| Column | Type |
|----------|----------|
| id | Integer |
| task | String |
| is_checked | Boolean |
| user_id | Integer |

---

## API Endpoints

### Signup

```http
POST /signup
```

### Login

```http
POST /login
```

### Add Todo

```http
POST /addtodo
```

### Get User Todos

```http
GET /todos/{user_id}
```

### Update Todo Status

```http
PUT /todo/{todo_id}
```

### Delete Todo

```http
DELETE /todo/{todo_id}
```

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/your-username/Todo-list.git
```

### Move to Backend Folder

```bash
cd todo_backend
```

### Create Virtual Environment

```bash
py -m venv myenv
```

### Activate Virtual Environment

```powershell
.\myenv\Scripts\Activate.ps1
```

### Install Dependencies

```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary
```

### Run FastAPI Server

```bash
uvicorn main:app --reload
```

Server will run at:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Application Flow

```text
Signup
   ↓
Login
   ↓
Store user_id in Local Storage
   ↓
Add Todos
   ↓
Save Todos in PostgreSQL
   ↓
Load Todos Based on Logged-in User
```

---

## Learning Outcomes

Through this project I learned:

- Frontend and Backend Integration
- REST API Development using FastAPI
- SQLAlchemy ORM
- PostgreSQL Database Operations
- User Authentication Basics
- CRUD Operations
- Fetch API
- Local Storage Usage
- Full Stack Application Development

---

## Future Improvements

- Password Hashing using bcrypt
- JWT Authentication
- Logout Functionality
- Edit Todo Feature
- Dark Mode
- Deploy using Render/Railway

---

## Author

Vinay Chary