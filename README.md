# Contact Management Application (MERN Stack)

# live url: 

A full-stack contact management application built using the MERN stack. Users can submit contact details through a form and view all submitted contacts dynamically without page reload.

---

## Tech Stack

### Frontend
- React.js (Pure React)
- useState & useEffect
- Axios

### Backend
- Node.js
- Express.js
- MVC Architecture (Model, Controller, Routes)

### Database
- MongoDB (Mongoose)
## Features

- Contact form with fields:
  - Name (required)
  - Email (valid email required)
  - Phone (required)
  - Message (optional)
- Submit button disabled if form is invalid
- REST APIs to add and fetch contacts
- Contacts displayed in a table/list without page reload
-contacts can be delete (later will be adding role-based deletion)
- Responsive and clean UI

---

## API Endpoints

| Method | Endpoint | Description |
|------|--------|-------------|
| POST | `/api/contacts` | Add new contact |
| GET | `/api/contacts` | Fetch all contacts |

---