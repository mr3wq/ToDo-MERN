
# MERN Stack Todo Application

This project is a simple todo application built using the MERN stack (MongoDB, Express, React, Node.js).

## Overview

The application allows users to create, view, update, and delete todo items. It consists of a backend built with Express and MongoDB, and a frontend built with React.

## Setup and Running the Application

### Backend Setup

1. Navigate to the `server` directory.
2. Run `npm install` to install the dependencies.
3. Set up MongoDB:
   - For local MongoDB, ensure it's running on your machine.
   - For MongoDB Atlas, replace the placeholder in the `.env` file with your cluster's connection string.
4. Start the server with `npm start`.

### Frontend Setup

1. Navigate to the `client` directory.
2. Run `npm install` to install the dependencies.
3. Start the React application with `npm start`.
4. The application will be available at `http://localhost:3000`.

## Functionality

- **Create Todo**: Add new todo items.
- **View Todos**: List all todo items.
- **Update Todo**: Mark items as completed or update their text.
- **Delete Todo**: Remove items from the list.

## Notes

Ensure that both the backend and frontend are running to use the application fully. The backend runs on `http://localhost:5000`, and the frontend on `http://localhost:3000`.
