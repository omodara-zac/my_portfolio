# Zaccheaus Omodara — Full-Stack Developer Portfolio

A full-stack developer portfolio built to showcase my skills, projects, education, experience, and contact information.

## Tech Stack

### Frontend

* React
* JavaScript
* HTML
* CSS
* Bootstrap
* Vite

### Backend

* Node.js
* Express.js
* REST API

### Database

* PostgreSQL

### Email

* Resend

### Tools

* Git
* GitHub
* VS Code

## Features

* Responsive portfolio website
* Hero and About sections
* Skills showcase
* Projects section
* Experience and Education sections
* Downloadable resume
* Contact form
* PostgreSQL database for storing contact messages
* Email notifications using Resend
* GitHub, LinkedIn, WhatsApp, and email links

## How It Works

The frontend is built with React and handles the user interface and contact form.

When a visitor submits the contact form, the data is sent to the Node.js/Express backend through a REST API.

The backend:

1. Receives the form data.
2. Validates the submitted information.
3. Stores the message in PostgreSQL.
4. Sends an email notification using Resend.

### Architecture

```text
React Frontend
      ↓
Express / Node.js API
      ↓
PostgreSQL Database
      +
Resend Email API
```

## Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   ├── hero.jsx
│   │   ├── about.jsx
│   │   ├── skills.jsx
│   │   ├── projects.jsx
│   │   ├── experience.jsx
│   │   ├── education.jsx
│   │   ├── contact.jsx
│   │   └── footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── backend/
│   ├── server.js
│   ├── db.js
│   └── package.json
├── index.html
└── package.json
```

## Running the Project

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend requires environment variables for the PostgreSQL database and Resend API.

## Author

**Zaccheaus Omodara**

* GitHub: https://github.com/omodara-Zac
* LinkedIn: https://www.linkedin.com/in/omodara-zaccheaus-3b160a441
* Email: [omodarazaccheaus@gmail.com](mailto:omodarazaccheaus@gmail.com)
