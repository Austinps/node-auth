# Node Authentication

Node.js backend application focusing on learning authentication best practices. It is a work in progress.

## Project Structure

The project structure follows a typical Node.js backend application structure, with the following main components:

server.js: The main entry point for the application.
middleware: Contains custom middleware functions used in the application.
config: Contains configuration files for the application.
routes: Contains route handlers for different endpoints.
public: Contains static files to be served by the application.

## Installation

Clone the repository:

git clone <repository_url>
Change to the project directory:

cd auth
Install the dependencies:

npm install
Start the server:

npm start
or

npm run dev
The start script runs the application with Node.js, while the dev script uses Nodemon to enable hot-reloading during development.

## Dependencies

The project uses the following dependencies:

bcrypt: Library for hashing and salting passwords.
cookie-parser: Middleware for parsing cookies.
cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).
date-fns: Library for manipulating dates.
dotenv: Module for loading environment variables from a .env file.
express: Web framework for Node.js.
jsonwebtoken: Library for generating and verifying JSON Web Tokens (JWT).
mongoose: MongoDB object modeling tool.
uuid: Library for generating UUIDs.

## Usage

The backend application provides routes for root, user, and note-related endpoints. The main server file server.js sets up the Express application and middleware.

The application supports the following routes:

/: Root route.
/users: User-related routes.
/notes: Note-related routes.

License
This project is private and not publicly available.
